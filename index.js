//verificação do login
function verificarLogin() {
    var usuario = document.getElementById('user').value
    var senha = document.getElementById('senha').value 
    var alert = document.getElementById('alert')

    if (usuario == "admin" && senha == "admin") {
        location.href = "index.html"
    } else {
        alert.style.display = "block"
        console.log("Usuário ou senha incorretos")
    }
}

//sistema de pesquisa
function searchGame() {
    let input = document.getElementById('searchBar').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('gameName')
    let y = document.getElementsByClassName('card')
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            y[i].style.display="none"
        }
        else {
            y[i].style.display="block" 
            y[i].classList.add(search-card-desktop)                
        }
    }
}