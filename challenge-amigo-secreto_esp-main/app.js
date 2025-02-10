let amigos = [];

function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    if (amigoIngresado == ""){
        alert('Por favor, inserte un nombre primero');
    }else{
        amigos.push(amigoIngresado);
        alert('Nombre ingresado');
        console.log(amigos);
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