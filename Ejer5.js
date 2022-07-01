
miAlturaEnCms = 193;
miAlturaEnMetros = 1.93;
miPesoEnKg = 98.2;
miAlturaRedondeadaHaciaArriba = Math.ceil(miAlturaEnMetros); 
miPesoRedondeadoHaciaAbajo = Math.floor(miPesoEnKg)

max = Number.MAX_VALUE;
maxMasUno = max + 1;
//  Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
esIgualAlMaxValor = max === maxMasUno; // si es verdadero devuelve true, caso contrario devuelve false

console.log("El maximo valor es igual a el maximo valor mas uno: " + esIgualAlMaxValor); 

