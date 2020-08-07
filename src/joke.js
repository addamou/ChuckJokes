document.getElementById('jokeBtn').addEventListener('click', jokeBtn);
//==========fonction de btn=======================
function jokeBtn(){
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('jokeTexte').innerHTML = data.value;
    })
        .catch((err) => document.getElementById('jokeTexte').innerHTML = "Erreur" )
}
