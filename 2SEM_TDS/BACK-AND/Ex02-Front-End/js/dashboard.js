function navigateTo(link) {
    window.location.href = link;
}
function changeLanguage(lang) {
    alert("Idioma selecionado: " + lang);
}

 async function fetchImage(username) {
    const imageUrl = `http://localhost:8080/usuario/foto/${username}`;
 
    try {
        const response =  await fetch(imageUrl);
        if (!response.ok) throw new Error("Imagem não encontrada");
 
        document.getElementById("userImage").src = imageUrl;
 
    } catch (error) {
        console.error("Erro ao carregar imagem:", error);
    }
}

let username = localStorage.getItem("username"); // Recupera o valor salvo
console.log(username);  // "meuUsuario"

if (username) {
    fetchImage(username); // Chama sua função de busca da imagem
} else {
    console.error("Usuário não encontrado!");
}