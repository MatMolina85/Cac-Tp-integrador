
const ticket = 1000;

let cantidad,guardar,borrar,totalAPagar

let dtoSocio= 0.5 ;
let dtoTransferencia = 0.25;
let dtoCuotas = 0.1;

let formulario,nombre,apellido,correo,categoria,total

categoria = document.querySelector('#categoria');
formulario = document.querySelector ( '#formulario');
cantidad = document.querySelector('#cantidad');
guardar= document.querySelector('#btnSummary');
borrar = document.querySelector('#btnDelete');
total = document.querySelector("#totalAPagar");

function resultado (){
    let monto = cantidad.value * ticket ;
    switch (categoria.value) {
        case "Socio":
            monto = monto - (monto * dtoSocio)
        break ; }
    switch (categoria.value) {
        case "Transferencia":
            monto = monto - (monto * dtoTransferencia)
            break;}
    switch (categoria.value) {
        case "Cuotas":
            monto = monto - (monto * dtoCuotas)
            break;}

        total.innerHTML = `Total a Pagar : $ ${monto}.`
        console.log (monto)
}

guardar.addEventListener ('click', (event)=> {
    event.preventDefault();
    comprobar();
    resultado();
})

borrar.addEventListener('click' , function(event){
       event.preventDefault();
       var indice = 0;
       indice = total.textContent.indexOf('$');
       total.textContent = total.textContent.substring(0, indice+1);
       formulario.reset()
    })

function comprobar(){
nombre = document.querySelector('#Nombre').value;
apellido = document.querySelector('#Apellido').value;
correo = document.querySelector('#Correo').value;

    if (nombre == '' &&  apellido =='' && correo == '')
    {alert ("Ingrese los datos solicitados")
return }
    else if (nombre == ''){
    alert ("Ingrese su nombre")
return }
    else if (apellido == '') {
    alert ("Ingrese el apellido")
return }
    else if (correo == '') {
        alert("Ingrese un correo electronico")
        return }
    else if (cantidad.value == '' || cantidad.value <= 0)  {
        alert("Ingrese una cantidad mayor a 0")
        return
    }
}















