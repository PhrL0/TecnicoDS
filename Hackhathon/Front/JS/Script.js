const API_BASE_URL = 'http://localhost:3000'; // **MUDE AQUI SE SEU BACKEND ESTIVER EM OUTRA PORTA/URL**

// Funções de feedback e fetchProducts... (deixe elas fora do DOMContentLoaded se quiser, mas as chamadas delas devem ser dentro)

// --- Funções de Feedback ao Usuário ---
function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `message ${type}`;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
        element.textContent = '';
        element.className = 'message';
    }, 3000); // Esconde a mensagem após 3 segundos
}

// --- Função para Carregar Produtos ---
async function fetchProducts() {
    // ... (o conteúdo da sua função fetchProducts permanece o mesmo) ...
    const productListDiv = document.getElementById('product-list'); // Obtenha aqui
    if (!productListDiv) { // Adicione uma checagem de segurança
        console.error("Elemento 'product-list' não encontrado!");
        return;
    }
    productListDiv.innerHTML = '<p>Carregando produtos...</p>';
    // ... restante da função fetchProducts ...
    try {
        const response = await fetch(`${API_BASE_URL}/getProdutos`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Erro ao carregar produtos.');
        }

        if (data.result.length === 0) {
            productListDiv.innerHTML = '<p>Nenhum produto cadastrado.</p>';
        } else {
            productListDiv.innerHTML = ''; // Limpa a lista antes de adicionar
            data.result.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                productItem.innerHTML = `
                    <div class="product-details">
                        <h3>${product.nome} (ID: ${product.id})</h3>
                        <p><strong>Descrição:</strong> ${product.textoDescritivo}</p>
                        <p><strong>Cor:</strong> ${product.cor}</p>
                        <p><strong>Fabricante:</strong> ${product.fabricante}</p>
                        <p><strong>Preço:</strong> R$ ${parseFloat(product.preco).toFixed(2)}</p>
                        <p><strong>Quantidade:</strong> ${product.quantidade}</p>
<p><strong>Imagens:</strong> ${product.imagens.map(img => `<img src="${img.urlImagem}" alt="Imagem do Produto" class="product-thumbnail">`).join(' ')}</p>                    </div>
                    <div class="product-actions">
                        <button class="btn-update-stock" data-id="${product.id}" data-quantity="${product.quantidade}">Atualizar Estoque</button>
                        <button class="btn-delete" data-id="${product.id}">Deletar</button>
                    </div>
                `;
                productListDiv.appendChild(productItem);
            });
            attachProductActionListeners(); // Adiciona listeners para os botões de ação
        }
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        productListDiv.innerHTML = '<p class="error">Erro ao carregar produtos. Verifique o console para mais detalhes.</p>';
        const listMessage = document.getElementById('list-message'); // Obtenha aqui
        if (listMessage) {
            showMessage(listMessage, error.message, 'error');
        }
    }
}

// --- Funções para anexar listeners dinamicamente ---
function attachProductActionListeners() {
    console.log("attachProductActionListeners chamada!"); // Adicione esta linha
    document.querySelectorAll('.btn-update-stock').forEach(button => {
        console.log("Botão de atualização encontrado:", button.dataset.id); // Adicione esta linha
        button.onclick = (e) => {
            const id = e.target.dataset.id;
            const quantity = e.target.dataset.quantity;

            console.log("Botão de produto clicado! ID:", id, "Quantidade:", quantity); // Adicione esta linha
            editingProductId = id; 

            const updateProductIdInput = document.getElementById('updateProductId');
            const updateQuantityInput = document.getElementById('updateQuantity');
            const updateStockSection = document.getElementById('update-stock-section');
            const updateMessage = document.getElementById('update-message');

            if (updateProductIdInput) updateProductIdInput.value = id; 
            if (updateQuantityInput) updateQuantityInput.value = quantity;
            if (updateStockSection) updateStockSection.style.display = 'block';
            if (updateProductIdInput) updateProductIdInput.readOnly = true;
            if (updateMessage) updateMessage.style.display = 'none';
            if (updateStockSection) updateStockSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    });

    document.querySelectorAll('.btn-delete').forEach(button => {
        button.onclick = (e) => {
            const id = e.target.dataset.id;
            deleteProduct(id);
        };
    });
}

// --- Deletar Produto (função já existente) ---
async function deleteProduct(id) {
    if (!confirm(`Tem certeza que deseja deletar o produto com ID ${id}?`)) {
        return;
    }
    try {
        const response = await fetch(`${API_BASE_URL}/produtos/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || `Erro ao deletar produto com ID ${id}.`);
        }
        const listMessage = document.getElementById('list-message'); // Obtenha aqui
        if (listMessage) {
            showMessage(listMessage, data.message, 'success');
        }
        fetchProducts();
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        const listMessage = document.getElementById('list-message'); // Obtenha aqui
        if (listMessage) {
            showMessage(listMessage, error.message, 'error');
        }
    }
}


// **TUDO ABAIXO DEVE ESTAR DENTRO DESTE BLOCO DOMContentLoaded**
document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM (apenas aqui para ter certeza que estão carregados)
    const addProductForm = document.getElementById('add-product-form');
    const addMessage = document.getElementById('add-message');
    // const productListSection = document.getElementById('product-list-section'); // Não precisa ser obtido aqui se só for usado em fetchProducts
    // const productListDiv = document.getElementById('product-list'); // Não precisa ser obtido aqui se já é obtido em fetchProducts
    // const listMessage = document.getElementById('list-message'); // Não precisa ser obtido aqui se já é obtido em fetchProducts

    const updateStockSection = document.getElementById('update-stock-section');
    const updateStockForm = document.getElementById('update-stock-form');
    const updateProductIdInput = document.getElementById('updateProductId');
    const updateQuantityInput = document.getElementById('updateQuantity');
    const updateMessage = document.getElementById('update-message');
    const cancelUpdateButton = document.getElementById('cancelUpdate');

    let editingProductId = null; // Para controlar qual produto está sendo atualizado

    // --- Adicionar Produto ---
    if (addProductForm) {
        addProductForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Evita o recarregamento da página

            const nome = document.getElementById('nome').value;
            const textoDescritivo = document.getElementById('textoDescritivo').value;
            const cor = document.getElementById('cor').value;
            const fabricante = document.getElementById('fabricante').value;
            const preco = parseFloat(document.getElementById('preco').value);
            const quantidade = parseInt(document.getElementById('quantidade').value);
            const imagensInput = document.getElementById('imagens').value;
            const imagens = imagensInput.split(',').map(url => url.trim()).filter(url => url !== '');

            try {
                const response = await fetch(`${API_BASE_URL}/cadastroProduto`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nome,
                        textoDescritivo,
                        cor,
                        fabricante,
                        preco,
                        quantidade,
                        imagens
                    }),
                });
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Erro ao cadastrar produto.');
                }

                if (addMessage) showMessage(addMessage, data.message, 'success');
                addProductForm.reset(); // Limpa o formulário
                fetchProducts(); // Recarrega a lista de produtos
            } catch (error) {
                console.error('Erro ao adicionar produto:', error);
                if (addMessage) showMessage(addMessage, error.message, 'error');
            }
        });
    } else {
        console.error("Elemento 'add-product-form' não encontrado!");
    }


    // --- Atualizar Estoque ---
    if (updateStockForm) {
        updateStockForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const productId = editingProductId;// Usa o ID armazenado
            console.log(productId);
            
            const newQuantity = parseInt(updateQuantityInput.value);

            if (productId === null) {
                if (updateMessage) showMessage(updateMessage, 'Nenhum produto selecionado para atualização.', 'error');
                return;
            }

            if (isNaN(newQuantity) || newQuantity < 0) {
                if (updateMessage) showMessage(updateMessage, 'Quantidade inválida. Deve ser um número não negativo.', 'error');
                return;
            }

            try {
                const response = await fetch(`${API_BASE_URL}/updateProduto/${productId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ quantidade: newQuantity }),
                });
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Erro ao atualizar estoque.');
                }

                if (updateMessage) showMessage(updateMessage, data.message, 'success');
                updateStockForm.reset();
                if (updateStockSection) updateStockSection.style.display = 'none'; // Esconde o formulário de atualização
                editingProductId = null; // Reseta o ID de edição
                fetchProducts(); // Recarrega a lista
            } catch (error) {
                console.error('Erro ao atualizar estoque:', error);
                if (updateMessage) showMessage(updateMessage, error.message, 'error');
            }
        });
    } else {
        console.error("Elemento 'update-stock-form' não encontrado!");
    }

    if (cancelUpdateButton) {
        cancelUpdateButton.addEventListener('click', () => {
            updateStockForm.reset();
            if (updateStockSection) updateStockSection.style.display = 'none';
            editingProductId = null;
            if (updateMessage) updateMessage.style.display = 'none'; // Esconde mensagens de atualização
        });
    } else {
        console.error("Elemento 'cancelUpdate' não encontrado!");
    }

    // Chamada inicial para carregar os produtos quando o DOM estiver pronto
    fetchProducts();
});