// Funciones Helpres /////////////

function esPar(numerito){
    if (numerito % 2 == 0){
        return "Es Par"
    } else {
        "Es Impar"
    }
}

function calcularMediaAritmetica(lista){

  const sumaLista = lista.reduce(
      function(valorAcumulado = 0, nuevoElemento){
          return valorAcumulado + nuevoElemento;
      }
  );
  const promedioLista = sumaLista/lista.length;

  return promedioLista;
}

/// Calculadora de Mediana //////////////

function medianaSalarioHn(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//////////// Mediana General //////////

const salariosHond = honduras.map(
    function(persona){
        return persona.salario;
    }
);

const salariosHondSorted = salariosHond.sort(
    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
);

const medianaGeneralHn = medianaSalarioHn(salariosHondSorted);


// Mediana del Top 10% //////////

const spliceStart = (salariosHondSorted.length * 90) / 100;
const spliceCount = salariosHondSorted.length - spliceStart;

const salarioHn10 = salariosHondSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Hn = medianaSalarioHn(salarioHn10);
 
console.log(medianaGeneralHn,medianaTop10Hn);