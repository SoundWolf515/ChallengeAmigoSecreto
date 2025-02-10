let amigos = [];

function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    if (amigoIngresado == ""){
        alert('Por favor, inserte un nombre primero');
    }else{
        amigos.push(amigoIngresado);
        alert('Nombre ingresado');
        console.log(amigos);
    }
}