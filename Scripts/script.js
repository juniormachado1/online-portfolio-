// Função de validação do formulário
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}

// Função para capturar dados enviados via GET
function capturarDados() {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');
    const email = params.get('email');
    const mensagem = params.get('mensagem');

    if (nome && email && mensagem) {
        document.getElementById('dadosUsuario').innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong> ${mensagem}</p>
        `;
    }
}

// Chama a função capturarDados apenas na página formAction.html
if (window.location.pathname.includes("formAction.html")) {
    window.onload = capturarDados;
}