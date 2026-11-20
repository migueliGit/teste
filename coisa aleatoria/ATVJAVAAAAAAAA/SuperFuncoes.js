
const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
//trim: remove espaços em branco no inicio e fim do texto
    if (email.trim() === "") {
        alert("Coloque seu email.");
        return;
    }
//is not a number  //.lenght conta a quantidade de caracteres
    if  (senha.trim() === "") {
        alert("digite sua senha.");
        return;
    }

   let = email = [""];
   let = senha = [""];

   function compararSenhas()  {
    if (senha.trim() === senha) 
        return;
    
   }


    // guarda dados
    usuarioCadastrado.email = email;
    usuarioCadastrado.senha = senha;



function proximo() {

    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let nascimento = document.getElementById("nascimento").value;

    if (!validarEmail(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (!validarCPF(cpf)) {
        alert("CPF inválido.");
        return;
    }

    if (!verificarIdade(nascimento)) {
        alert("Você precisa ter 18 anos ou mais.");
        return;
    }

    document.getElementById("tela1").style.display = "none";
    document.getElementById("tela2").style.display = "block";
}


function telaAtualCadastro() {

    if(telaAtual) {
        telaAtual.classList.remove('ativa');
    }

    const proximaTela = document.getElementById(proximaTelad);

    if (proximaTela) {
        proximaTela.classList.add('ativa');
    }

        // ve se o email e a senha sao as mesmas
    if (emailDigitado === usuarioCadastrado.email && senhaDigitada === usuarioCadastrado.senha) {
        alert("Login realizado com sucesso!");
        //conecta a outra janela: tela principal
        window.location.href = "principal.html";
        // nome do aluno na tela princ
        document.getElementById('mensagemBoasVindas').innerText = `Olá, ${usuarioCadastrado.nome}!.`;

        // tela principal
        mudarTela('tela-principal');
    } else {
        // se a senha ou email estiverem errado
        alert("E-mail ou senha incorretos! Tente novamente.");
    }
}