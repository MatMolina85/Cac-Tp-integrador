const datos = {
    cantidad: '',
    categoria: '',
}
const categoria = document.querySelector('#categoria');
datos.categoria = 'Socio';



const cantidad = document.querySelector('#cantidad');
const guardar= document.querySelector('#btnSummary');
const borrar = document.querySelector('#btnDelete');
const formulario = document.querySelector('#formulario');
const total = document.querySelector("#totalAPagar")

var nombre,apellido,correo

cantidad.addEventListener ( 'input', function(event){
    datos.cantidad = event.target.value;
    console.log ( `Cantidad ${event.target.value} ingresada `)
} )

categoria.addEventListener('change', function(event){
    datos.categoria = event.target.value;
    console.log("Categoria: " + event.target.value + " guardada");
});

function comprobar(){
nombre = document.querySelector('input [placeholder="Nombre"]').value;
apellido = document.querySelector('input [placeholder="Apellido"]').value;
correo = document.querySelector('input [placeholder="Email"]').value;

    if (nombre == '' &&  apellido=='' && correo == '')
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
        return
    }
    else if (cantidad.value == '' || cantidad.value == 0)  {
        alert("Ingrese la cantidad")
        return
    }
}
console.log (comprobar)

guardar.addEventListener('click' , function(event) {
    event.preventDefault();
    const {cantidad,categoria} = datos;
    var resultado = 0;
    var  indice = 0;


    while ( cantidad >= 0){
    if(categoria == 'Socio'){
        total.textContent = "Monto a Pagar: $"
        resultado = (1000*cantidad)*0.5;
        console.log(`Las entradas son ${cantidad} en la categoria ${categoria}. El monto total a abonar es : ${resultado}`);
    }
    else if(categoria == 'Transferencia'){
        total.textContent = "Monto a Pagar: $"
        resultado = (1000*cantidad)* 0.75;
        console.log(`Las entradas son ${cantidad} en la categoria ${categoria}. El monto total a abonar es : ${resultado}`)}

        else if(categoria == 'Cuotas'){
            total.textContent = "Monto a Pagar: $"
            resultado = (1000*cantidad)*0.9;
            console.log(`Las entradas son ${cantidad} en la categoria ${categoria}. El monto total a abonar es : ${resultado}`)};

        totalAPagar.textContent += resultado;


        return;

    }
    formulario.reset()}
    )

    borrar.addEventListener('click' , function(event){
        event.preventDefault();
        var indice = 0;
        indice = total.textContent.indexOf('$');
        total.textContent = total.textContent.substring(0, indice+1);
        formulario.reset();
        return;
    });

















