//1) Ingresar precio de costo - 2) Sumar IVA - 3) Mostrar precio calculado.
alert("Recuerde que los códigos para cada producto son los siguientes: 1 = Remera; 2 = Pantalón; 3 = Zapatillas");
function producto(elegirProducto){
    var elegirProducto = prompt("¿Qué producto querés comprar?");
        switch(elegirProducto){
                    case "1":
                        return 600;
                        break;
                    case "2":
                        return 1400;
                        break;
                    case "3":
                        return 2200;
                        break;
                    default:
                    return(alert("Producto ingresado inválido"));
                }
                
        }
function envio(elegirEnvio){
    var elegirEnvio = prompt("¿Desea que se lo envíemos?");
        switch(elegirEnvio){
                    case "si":
                        return 350;
                        break;
                    case "no":
                        return 0;
                        break;
                    default:
                    return(alert("Responda por si o por no"));
                }
}

function recargo(tipoPago){
    var tipoPago = prompt("¿Pagará en efectivo o tarjeta?");
    switch(tipoPago){
        case "efectivo":
            return 0;
            break;
        case "tarjeta":
            return 300;
            break;
        default:
            return(alert("¡Metodo de pago no valido!"));
    }
}

var resultado = producto() + envio() + recargo();
console.log("Usted deberá de abonar: " + resultado);
alert("Usted deberá de abonar: " + resultado);