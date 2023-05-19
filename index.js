function verificarLogin() {
    const usuario = document.getElementById('user')
    const senha = document.getElementById('senha') 
    const linkEntrar = document.getElementById('linkEntrar') 
    const alert = document.getElementById('alert')

    if (usuario === 'usuario' && senha === 'senha') {
        window.location.href = "index.html"
    } else if (usuario !== 'usuario' || senha !== 'senha') {
        window.location.href = "login.html"
        alert.classList.remove('invisible')
        alert.classList.add('visible')
        console.log("Usuário ou senha errados")
    }
}

verificarLogin()