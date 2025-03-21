let listaNomes = document.getElementById('lista-amigos');
let listaSorteados = document.getElementById('lista-sorteio');
let participantes = [];

function adicionar (){
    let nome = document.getElementById('nome-amigo').value;
    if (nome == ''){
        alert('Insira o nome desejado!');
        return;
    }
    if(participantes.includes(nome)){
        alert('Nomes repetidos não são permitidos!');
        return;
    }
    listaNomes.innerHTML += `${nome}<br>`;
    participantes.push(nome);
    document.getElementById('nome-amigo').value = '';
}

function embaralhar(array) {
    let indiceAtual = array.length, indiceAleatorio;

    while (indiceAtual > 0) {
        indiceAleatorio = Math.floor(Math.random() * indiceAtual);
        indiceAtual--;

        [array[indiceAtual], array[indiceAleatorio]] = [
            array[indiceAleatorio], array[indiceAtual]];
    }

    return array;
}

function sortear(){
    if (participantes.length < 4) {
        alert("Adicione pelo menos quatro participantes!");
        return;
    }

    let sorteados = [...participantes];
    embaralhar(sorteados);

    for(let i = 0; i < participantes.length; i++){
        if(participantes[i] === sorteados[i]){
            sortear();
            return;
        }
    }

    listaSorteados.innerHTML = '';
    for(let i = 0; i < participantes.length; i++){
        listaSorteados.innerHTML += `${participantes[i]} --> ${sorteados[i]}<br>`;
    }
}

function reiniciar (){
    participantes = [];
    listaNomes.innerHTML = '';
    document.getElementById('nome-amigo').value = '';
    listaSorteados.innerHTML = '';
}
