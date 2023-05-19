function verificarLogin() {
    const usuario = document.getElementById('user')
    const senha = document.getElementById('senha') 
    const linkEntrar = document.getElementById('linkEntrar') 
    const alert = document.getElementById('alert')

    if (usuario == 'usuario' && senha == 'senha') {
        linkEntrar.setAttribute('href', 'index.html')
    } else if (usuario != 'usuario' || senha != 'senha') {
        alert.classList.remove('invisible')
        alert.classList.add('visible')
    }
}