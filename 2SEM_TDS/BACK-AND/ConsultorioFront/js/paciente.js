const API_BASE = 'http://localhost:8080/pacientes';
        let editingId = null;

        // Elementos DOM
        const form = document.getElementById('pacienteForm');
        const nomeInput = document.getElementById('nome');
        const cpfInput = document.getElementById('cpf');
        const dataInput = document.getElementById('dataNascimento');
        const searchInput = document.getElementById('searchInput');
        const pacientesContainer = document.getElementById('pacientesContainer');
        const errorAlert = document.getElementById('errorAlert');
        const successAlert = document.getElementById('successAlert');

        // Máscara de CPF
        cpfInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2')
                         .replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
                         .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
            e.target.value = value.substring(0, 14);
        });

        // Validações
        const validateForm = (data) => {
            console.log(data);
            
            if (!data.nome.trim()) return 'Nome é obrigatório';
            if (!data.cpf || data.cpf.length != 11) return 'CPF inválido';
            if (!data.dataNascimento) return 'Data de nascimento é obrigatória';
            
            const birthDate = new Date(data.dataNascimento);
            if (birthDate > new Date()) return 'Data de nascimento futura';
            
            return null;
        };

        // Mensagens
        const showAlert = (message, type = 'error') => {
            const alert = type === 'error' ? errorAlert : successAlert;
            alert.textContent = message;
            alert.style.display = 'block';
            setTimeout(() => alert.style.display = 'none', 5000);
        };

        // Operações CRUD
        const fetchPacientes = async () => {
            try {
                const response = await fetch(API_BASE);
                if (!response.ok) throw new Error('Erro ao carregar pacientes');
                return await response.json();
            } catch (error) {
                showAlert(error.message);
                return [];
            }
        };

        const createPaciente = async (data) => {
            try {
                const response = await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...data, id: 0 })
                });
                
                if (!response.ok) throw new Error(await response.text());
                return await response.json();
            } catch (error) {
                throw new Error(`Erro ao criar: ${error.message}`);
            }
        };

        const updatePaciente = async (id, data) => {
            try {
                const response = await fetch(`${API_BASE}/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                if (!response.ok) throw new Error(await response.text());
                return await response.json();
            } catch (error) {
                throw new Error(`Erro ao atualizar: ${error.message}`);
            }
        };

        const deletePaciente = async (id) => {
            try {
                const response = await fetch(`${API_BASE}/${id}`, {
                    method: 'DELETE'
                });
                
                if (!response.ok) throw new Error('Erro ao excluir paciente');
                return true;
            } catch (error) {
                throw new Error(`Erro ao excluir: ${error.message}`);
            }
        };

        // Renderização
        const renderPacientes = (pacientes) => {
            pacientesContainer.innerHTML = pacientes.map(paciente => `
                <div class="paciente-card" data-id="${paciente.id}">
                    <div class="paciente-info">
                        <h3>${paciente.nome}</h3>
                        <p>CPF: ${paciente.cpf}</p>
                        <p>Nascimento: ${new Date(paciente.dataNascimento).toLocaleDateString('pt-BR')}</p>
                    </div>
                    <div class="actions">
                        <button onclick="handleEdit('${paciente.id}')">Editar</button>
                        <button onclick="handleDelete('${paciente.id}')">Excluir</button>
                    </div>
                </div>
            `).join('');
        };

        // Handlers
        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const pacienteData = {
                nome: nomeInput.value.trim(),
                cpf: cpfInput.value.replace(/\D/g, ''),
                dataNascimento: dataInput.value
            };

            const validationError = validateForm(pacienteData);
            if (validationError) return showAlert(validationError);

            try {
                if (editingId) {
                    await updatePaciente(editingId, pacienteData);
                    showAlert('Paciente atualizado com sucesso!', 'success');
                } else {
                    await createPaciente(pacienteData);
                    showAlert('Paciente cadastrado com sucesso!', 'success');
                }

                form.reset();
                editingId = null;
                document.getElementById('submitBtn').textContent = 'Cadastrar Paciente';
                await loadPacientes();
            } catch (error) {
                showAlert(error.message);
            }
        };

        const handleEdit = async (id) => {
            try {
                const response = await fetch(`${API_BASE}/${id}`);
                if (!response.ok) throw new Error('Paciente não encontrado');
                
                const paciente = await response.json();
                nomeInput.value = paciente.nome;
                cpfInput.value = paciente.cpf;
                dataInput.value = paciente.dataNascimento;
                editingId = id;
                document.getElementById('submitBtn').textContent = 'Atualizar Paciente';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (error) {
                showAlert(error.message);
            }
        };

        const handleDelete = async (id) => {
            if (!confirm('Tem certeza que deseja excluir este paciente?')) return;
            
            try {
                await deletePaciente(id);
                showAlert('Paciente excluído com sucesso!', 'success');
                await loadPacientes();
            } catch (error) {
                showAlert(error.message);
            }
        };

        const handleSearch = (e) => {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.paciente-card');
            
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(term) ? 'grid' : 'none';
            });
        };

        // Inicialização
        const loadPacientes = async () => {
            const pacientes = await fetchPacientes();
            renderPacientes(pacientes);
        };

        // Event Listeners
        form.addEventListener('submit', handleSubmit);
        searchInput.addEventListener('input', handleSearch);

        // Inicializar
        loadPacientes();