let amigos = [];

function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    if (amigoIngresado == ""){
        alert('Por favor, inserte un nombre primero');
    }else{
        amigos.push(amigoIngresado);
        limpiarEntrada();
        crearItem();
    }
}

function crearItem(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function limpiarEntrada(){
    document.getElementById('amigo').value = '';
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert('Lista vacía, por favor ingrese un nombre');
    }
    else{
        let amigoSecreto = Math.floor(Math.random()*amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML= amigos[amigoSecreto];
    }
}