const API_BASE = 'http://localhost:8080/consultas';
        let editingId = null;

        // Elementos DOM
        const form = document.getElementById('consultaForm');
        const medicoInput = document.getElementById('medicoId');
        const pacienteInput = document.getElementById('pacienteId');
        const dataInput = document.getElementById('data');
        const horaInput = document.getElementById('hora');
        const tipoInput = document.getElementById('tipo');
        const errorAlert = document.getElementById('errorAlert');
        const successAlert = document.getElementById('successAlert');

        // Funções de Helpers
        const showAlert = (message, type = 'error') => {
            const alert = type === 'error' ? errorAlert : successAlert;
            alert.textContent = message;
            alert.style.display = 'block';
            setTimeout(() => alert.style.display = 'none', 5000);
        };

        // Validações
        const validateForm = (data) => {
            console.log(data);
            
            if (!data.medicoId || data.medicoId <= 0) return 'ID do médico inválido';
            if (!data.pacienteId || data.pacienteId <= 0) return 'ID do paciente inválido';
            if (!data.dataHora || new Date(data.dataHora) < new Date()) return 'Data/hora deve ser futura';
            if (!data.tipo.trim()) return 'Tipo de consulta é obrigatório';
            return null;
        };

        // Operações CRUD
        const fetchConsultas = async () => {
            try {
                
                const response = await fetch(API_BASE);
                if (!response.ok) throw new Error('Erro ao carregar consultas');
                return await response.json();
            } catch (error) {
                showAlert(error.message);
                return [];
            }
        };

        const saveConsulta = async (data, id = null) => {
            const method = id ? 'PUT' : 'POST';
            const url = id ? `${API_BASE}/${id}` : API_BASE;

            try {
                const response = await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...data, id: id || 0 })
                });

                if (!response.ok) throw new Error(await response.text());
                return await response.json();
            } catch (error) {
                throw new Error(`Erro ao ${id ? 'atualizar' : 'criar'} consulta: ${error.message}`);
            }
        };

        const deleteConsulta = async (id) => {
            try {
                const response = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
                if (!response.ok) throw new Error('Erro ao excluir consulta');
                return true;
            } catch (error) {
                throw new Error(`Erro ao excluir: ${error.message}`);
            }
        };

        // Renderização
        const renderConsultas = (consultas) => {
            const container = document.getElementById('consultasContainer');
            container.innerHTML = consultas.map(consulta => `
                <div class="consulta-card" data-id="${consulta.id}">
                    <div class="consulta-info">
                        <span class="badge">${consulta.tipo}</span>
                        <p>Médico: ${consulta.medico.nome}</p>
                        <p>Paciente: ${consulta.paciente.nome}</p>
                        <p>${new Date(consulta.dataHora).toLocaleString('pt-BR')}</p>
                    </div>
                    <div class="actions">
                        <button onclick="handleEdit('${consulta.id}')">Editar</button>
                        <button onclick="handleDelete('${consulta.id}')">Cancelar</button>
                    </div>
                </div>
            `).join('');
        };

        // Handlers
        const handleSubmit = async (e) => {
            e.preventDefault();

            const consultaData = {
                medico: {id: Number(medicoInput.value)},
                paciente: {id: Number(pacienteInput.value)},
                dataHora: `${dataInput.value}T${horaInput.value}:00`,
                tipo: tipoInput.value.trim()
            };

            const error = validateForm(consultaData);
            if (error) return showAlert(error);

            try {
                await saveConsulta(consultaData, editingId);
                showAlert(`Consulta ${editingId ? 'atualizada' : 'agendada'} com sucesso!`, 'success');
                
                form.reset();
                editingId = null;
                document.getElementById('submitBtn').textContent = 'Agendar Consulta';
                await loadConsultas();
            } catch (error) {
                showAlert(error.message);
            }
        };

        const handleEdit = async (id) => {
            try {
                const response = await fetch(`${API_BASE}/${id}`);
                if (!response.ok) throw new Error('Consulta não encontrada');
                
                const consulta = await response.json();
                const [date, time] = consulta.dataHora.split('T');

                medicoInput.value = consulta.medico.id;
                pacienteInput.value = consulta.paciente.id;
                dataInput.value = date;
                horaInput.value = time.substring(0, 5);
                tipoInput.value = consulta.tipo;
                
                editingId = id;
                document.getElementById('submitBtn').textContent = 'Atualizar Consulta';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (error) {
                showAlert(error.message);
            }
        };

        const handleDelete = async (id) => {
            if (!confirm('Tem certeza que deseja cancelar esta consulta?')) return;
            
            try {
                await deleteConsulta(id);
                showAlert('Consulta cancelada com sucesso!', 'success');
                await loadConsultas();
            } catch (error) {
                showAlert(error.message);
            }
        };

        // Busca
        const handleSearch = (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.consulta-card').forEach(card => {
                card.style.display = card.textContent.toLowerCase().includes(term) ? 'grid' : 'none';
            });
        };

        // Inicialização
        const loadConsultas = async () => {
            const consultas = await fetchConsultas();
            renderConsultas(consultas);
        };

        // Event Listeners
        form.addEventListener('submit', handleSubmit);
        document.getElementById('searchInput').addEventListener('input', handleSearch);

        // Carregar dados iniciais
        loadConsultas();