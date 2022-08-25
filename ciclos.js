let nombreCliente = prompt ("Ingrese su nombre")
let apellidoCliente = prompt ("Ingrese su apellido")
let nombreCompleto = nombreCliente + " " + apellidoCliente
let numero = Number (prompt ("Ingrese el numero de años que desea el plan"))
let Dinero = Number (prompt ("Ingrese el monto que quiere depositar"))

if ((nombreCliente == "") && (apellidoCliente == "")){
    alert ("No ingresaste el nombre completo")
}
else {
    alert ("Nombre de usuario"+ nombreCompleto);
}

if (numero >=5 && Dinero <=1200){
    for (let i = 0 ; i<=10 ; i++ ){
        let resultado = numero * Dinero + i;
        console.log(resultado, "Son los meses de aporte a realizar")
    }
    alert (`¡Felicidades! Usted califica para el plan`)

} else{
    if (numero < 5 && Dinero < 1200)
    alert (`Usted no califica para el plan`)
    console.log("No califica para el plan")
}
