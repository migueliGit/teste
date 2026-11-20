function mostrarOla() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resposta").innerHTML = "Olá," + nome;
}
let mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarOla);