function verificarLogin() {
    var usuario = document.getElementById('user').value
    var senha = document.getElementById('senha').value 
    var alert = document.getElementById('alert')

    if (usuario == "usuario" && senha == "senha") {
        window.location.href = "index.html";
    } else {
        alert.classList.remove('invisible')
        alert.classList.add('visible')
        console.log("Usuário ou senha incorretos")
    }
}