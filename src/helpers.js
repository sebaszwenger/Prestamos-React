export function calcularTotal(cantidad, plazo) {

    let totalCantidad;
    if(cantidad <= 1000) {
        totalCantidad = cantidad * .25;
    } else if (cantidad > 1000 && cantidad <= 5000 ) {
        totalCantidad = cantidad * .2;
    } else if (cantidad > 5000 && cantidad <= 10000) {
        totalCantidad = cantidad * .15;
    } else {
        totalCantidad = cantidad * .1;
    }

    //Calcular el plazo
    let totalPlazo = 0;
    switch(plazo) {
        case 3: 
            totalPlazo = cantidad *.05;
            break;
        case 6: 
            totalPlazo = cantidad *.1;
            break;  
        case 12: 
            totalPlazo = cantidad *.15;
            break;  
        case 24: 
            totalPlazo = cantidad *.2;
            break;    
        default: 
            break;    
    }

    return cantidad + totalPlazo + totalCantidad;
}