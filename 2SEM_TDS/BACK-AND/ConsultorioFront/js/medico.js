const API_BASE = 'http://localhost:8080/medicos';
        let editingId = null;

        // Helpers
        const showError = (message) => {
            const errorEl = document.getElementById('errorMessage');
            errorEl.textContent = message;
            errorEl.style.display = 'block';
            setTimeout(() => errorEl.style.display = 'none', 5000);
        };

        const fetchMedicos = async () => {
            try {
                const response = await fetch(API_BASE);
                if (!response.ok) throw new Error('Erro ao carregar dados');
                return await response.json();
            } catch (error) {
                showError(error.message);
                return [];
            }
        };

        const renderMedicos = (medicos) => {
            const container = document.getElementById('medicosContainer');
            container.innerHTML = medicos.map(medico => `
                <div class="medico-card" data-id="${medico.id}">
                    <div>
                        <h3>${medico.nome}</h3>
                        <p>${medico.especialidade}</p>
                    </div>
                    <div class="actions">
                        <button onclick="handleEdit('${medico.id}')">Editar</button>
                        <button onclick="handleDelete('${medico.id}')">Excluir</button>
                    </div>
                </div>
            `).join('');
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const formData = {
                nome: document.getElementById('nome').value.trim(),
                especialidade: document.getElementById('especialidade').value.trim()
            };

            try {
                const url = editingId ? `${API_BASE}/${editingId}` : API_BASE;
                const method = editingId ? 'PUT' : 'POST';

                const response = await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...formData, id: editingId || 0 })
                });

                if (!response.ok) throw new Error('Erro ao salvar dados');

                editingId = null;
                document.getElementById('submitBtn').textContent = 'Cadastrar Médico';
                document.getElementById('medicoForm').reset();
                await loadAndRenderMedicos();
            } catch (error) {
                showError(error.message);
            }
        };

        const handleEdit = async (id) => {
            try {
                const response = await fetch(`${API_BASE}/${id}`);
                if (!response.ok) throw new Error('Médico não encontrado');
                
                const medico = await response.json();
                document.getElementById('nome').value = medico.nome;
                document.getElementById('especialidade').value = medico.especialidade;
                editingId = id;
                document.getElementById('submitBtn').textContent = 'Atualizar Médico';
            } catch (error) {
                showError(error.message);
            }
        };

        const handleDelete = async (id) => {
            if (!confirm('Tem certeza que deseja excluir?')) return;
            
            try {
                const response = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
                if (!response.ok) throw new Error('Erro ao excluir');
                await loadAndRenderMedicos();
            } catch (error) {
                showError(error.message);
            }
        };

        const handleSearch = (e) => {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.medico-card');
            
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(term) ? 'flex' : 'none';
            });
        };

        const loadAndRenderMedicos = async () => {
            const medicos = await fetchMedicos();
            renderMedicos(medicos);
        };

        // Event Listeners
        document.getElementById('medicoForm').addEventListener('submit', handleSubmit);
        document.getElementById('searchInput').addEventListener('input', handleSearch);

        // Initial Load
        loadAndRenderMedicos();