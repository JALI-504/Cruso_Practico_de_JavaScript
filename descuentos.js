function  elDescuento(precio, descuento){
    const dsct = precio-((precio*descuento)/100);

    return dsct;
}

function calcularDescuento(){
    const inputPrecio = document.getElementById("precio");
    const inputDescuento = document.getElementById("descuento");

    const valuePrecio = inputPrecio.value;
    const valueDescuento = inputDescuento.value;
    
    const descuentoTotal = elDescuento(valuePrecio, valueDescuento);
    // alert ("El Precio con descuento es = "+parseFloat(descuentoTotal).toFixed(2));
    const resultado = document.getElementById("resultado");

    resultado.innerText = "El precio con descuento es de L. " + descuentoTotal;
}
