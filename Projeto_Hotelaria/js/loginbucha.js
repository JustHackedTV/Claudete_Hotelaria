function Login(event) {
    event.preventDefault(); // Impede o envio do formulário

    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;  // Pegamos a senha em texto puro

    // Criptografando a senha com SHA-256
    var senhaCriptografada = CryptoJS.SHA256(senha).toString(CryptoJS.enc.Base64);  // Criptografa a senha

    // Verificando se o usuário e a senha estão corretos
    if (usuario == "admin" && senhaCriptografada == "d2d2d2a4e9fdd7fd572d26e8d66e9e6d0dfe5d3d7a32a0a5174d9c4456d6b7bd") {  // SHA-256 da senha "admin"
        localStorage.setItem('logado', 'true');
        window.location.href = 'index.html';
    } else {
        alert("Dados incorretos, tente novamente");
    }
}

// Função para alternar entre mostrar/esconder a senha
function toggleSenha() {
    var senhaInput = document.getElementById("txtSenha");
    var olhoIcon = document.getElementById("toggleSenha").getElementsByTagName('i')[0];

    // Verifica se a senha está visível ou não
    if (senhaInput.type === "password") {
        senhaInput.type = "text"; // Mostra a senha
        olhoIcon.classList.remove("fa-eye"); // Remove o ícone de olho aberto
        olhoIcon.classList.add("fa-eye-slash"); // Adiciona o ícone de olho fechado
    } else {
        senhaInput.type = "password"; // Esconde a senha
        olhoIcon.classList.remove("fa-eye-slash"); // Remove o ícone de olho fechado
        olhoIcon.classList.add("fa-eye"); // Adiciona o ícone de olho aberto
    }
}

