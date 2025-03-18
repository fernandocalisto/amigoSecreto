let listaNomes = document.getElementById('lista-amigos');

function adicionar (){
    let nome = document.getElementById('nome-amigo').value;
    listaNomes.innerHTML = `${listaNomes.innerHTML}${nome}<br>`;
}