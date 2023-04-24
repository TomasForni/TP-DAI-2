import countryToCurrency from "country-to-currency";

let monedaDelPais, codigoPais;

codigoPais = 'AR'; 
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`); 

codigoPais = 'CR'; // Croacia
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'US'; 
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA'; 
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'GUFF'; 
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais){
    if(countryToCurrency[ codigoPais ] != undefined){
        return countryToCurrency[ codigoPais ];
    }else return null
}