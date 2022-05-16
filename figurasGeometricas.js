// CODIGO DEL CUADRADO  /////////

console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden; "+ladoCuadrado+" cm");

// convertiremos la variable ne funcion
// const perimetroCuadrado =ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: "+perimetroCuadrado+" cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

// const areaCuadrado =ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: "+areaCuadrado+" cm^2");

function areaCuadrado(lado){
    return lado * lado;
}

/////////// Funciones para el Cuadrado //////////////////

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área es de: "+parseFloat(area).toFixed(2))
 
}
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El Perimetro es de: "+parseFloat(perimetro).toFixed(2));

}
console.groupEnd();

// CODIGO DEL TRIANGULO ////////////
console.group("Triangulo");

// const baseTriangulo = 4;
// const ladoA = 6;
// const ladoB = 6;
// const altura = 5.5;
// const perimetroTriangulo = baseTriangulo + ladoA + ladoB;
// const areaTriangulo = (baseTriangulo*altura)/2;

// console.log("Cada uno de los lados del triangulos mie: A= "+ladoA+" cm, "+" B="+ladoB+" cm y "+"C="+baseTriangulo +" cm ");
// console.log("El perimetro del Triangulo es: "+perimetroTriangulo+" cm");
// console.log("La altura del triangulo es: "+altura+" cm");
// console.log("El Área del triangulo es: "+areaTriangulo+" cm^2");

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}
function areaTriangulo(base,altura){
    return (base*altura)/2;
}

/////////// Funciones para el Triangulo //////////////////

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("lado1");
    const inputLado2 = document.getElementById("lado2");
    const inputBase = document.getElementById("base");
    const valueLado1 = (inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);

    alert("El Perimetro es de: "+parseFloat(perimetro).toFixed(2));
}

function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("base2");
    const inputBase = document.getElementById("altura");
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const areaT = areaTriangulo(valueBase,valueAltura);

    alert("El área es de: "+parseFloat(areaT).toFixed(2));
}

console.groupEnd();

// CIRCULO ///////////////////

console.group("Circulo");

// const radio = 4;
// const diametro = radio *2;
const pi = Math.PI;
// const perimetroCirculo = diametro * pi;
// const areaCirculo = (radio * radio) * pi;

// console.log("El valor de Pi es: "+pi);
// console.log("El radio del circulo es: "+radio);
// console.log("El diametro del circulo es: "+diametro);
// console.log("El perimetro del circulo es: "+perimetroCirculo);
// console.log("El área del circulo es: "+areaCirculo);

function diametroCirculo(radio){
    return radio * 2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
function areaCirculo(radio){
    return (radio*radio) * pi;
}

function calcularRadioCirculo(){
    const inputDiametro = document.getElementById("radio");
    const inputCircunferencia = document.getElementById("radio");
    const inputArea = document.getElementById("radio");
    // const value = input.value;
    const valueDiametro = inputDiametro.value;
    const valueCircunferencia = inputCircunferencia.value;
    const valueArea = inputArea.value;

    const diametro = diametroCirculo(valueDiametro);
    const circunferencia = perimetroCirculo(valueCircunferencia);
    const area = areaCirculo(valueArea);
    alert("El diametro es de: "+parseFloat(diametro).toFixed(2));
    alert("La circunfernecia es de: "+parseFloat(circunferencia).toFixed(2));
    alert("El area es de: "+parseFloat(area).toFixed(2));
}

console.groupEnd();


///////////Llamar funciones desde HTML //////////////////
