const nome = document.getElementById('nomeAluno').value;
    const cpf = document.getElementById('docAluno').value;
//trim: remove espaços em branco no inicio e fim do texto
    if (nome.trim() === "") {
        alert("Preencha o seu nome.");
        return;
    }
//is not a number  //.lenght conta a quantidade de caracteres
    if (cpf.length !== 11 || isNaN(cpf)) {
        alert("O CPF deve conter exatamente 11 números.");
        return;
    }

    // guarda dados
    usuarioCadastrado.nome = nome;
    usuarioCadastrado.cpf = cpf;

    mudarTela('cad-etapa2');
});

//email
document.getElementById('formEtapa2').addEventListener('submit', function(evento) {
    evento.preventDefault();

    const email = document.getElementById('emailAluno').value;

    if (!email.includes('@') || !email.includes('.')) {
        alert("Digite um e-mail válido com '@' e '.'.");
        return;
    }

    //guarda o email
    usuarioCadastrado.email = email;

    mudarTela('cad-etapa3');
});

// data e senha
document.getElementById('formEtapa3').addEventListener('submit', function(evento) {
    evento.preventDefault();

    const dataInput = document.getElementById('dataAula').value;
    const novaSenha = document.getElementById('novaSenha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if (!dataInput) {
        alert("Escolha uma data para a sua aula!");
        return;
    }

    const dataEscolhida = new Date(dataInput);
    const hoje = new Date();

    if (dataEscolhida < hoje.setHours(0,0,0,0)) {
        alert("A data não pode ser no passado!");
        return;
    }

    // senha
    if (novaSenha.trim() === "") {
        alert("Digite uma senha.");
        return;
    }

    // ve se as duas senhas sao as mesmas
    if (novaSenha !== confirmaSenha) {
        alert("As senhas não coincidem! Digite a mesma senha nos dois campos.");
        return;
    }

    // save de senha e data
    usuarioCadastrado.dataAula = dataInput;
    usuarioCadastrado.senha = novaSenha;

    alert("Cadastro concluído com sucesso! Agora você já pode fazer o Login.");
    mudarTela('tela-login');
});

//login
document.getElementById('formLogin').addEventListener('submit', function(evento) {
    evento.preventDefault();

    const emailDigitado = document.getElementById('loginUser').value;
    const senhaDigitada = document.getElementById('senhaUser').value;

    //se  a pessoa n fez o cadastro
    if (usuarioCadastrado.email === "") {
        alert("Nenhum usuário cadastrado ainda! Faça o cadastro primeiro.");
        return;
    }

    // ve se o email e a senha sao as mesmas
    if (emailDigitado === usuarioCadastrado.email && senhaDigitada === usuarioCadastrado.senha) {
        alert("Login realizado com sucesso!");
        //conecta a outra janela: tela principal
        window.location.href = "principal.html";
        // nome do aluno na tela princ
        document.getElementById('mensagemBoasVindas').innerText = `Olá, ${usuarioCadastrado.nome}! Bem-vindo(a) à sua Área do Aluno.`;

        // tela principal
        mudarTela('tela-principal');
    } else {
        // se a senha ou email estiverem errado
        alert("E-mail ou senha incorretos! Tente novamente.");
    }
});