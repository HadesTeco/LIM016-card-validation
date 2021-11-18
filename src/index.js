
import validator from './validator.js';

    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit",()=>{
    let numberCard = document.getElementById('number').value;
    let validador = validator.isValid(numberCard);
    console.log(validator.maskify(numberCard)) 
    if (validador){
        alert("tu tarjeta es válida") 
    }
    else {
        alert("tu tarjeta es inválida")  
    }

  })

   
  
    
  
  
  /*let mascara = validator.maskify(numberCard)

  maskify:(numberCard)=>{
      let getMask = numberCard.toString().split("")
     
      let ultimos = mascara.slice(-4);
      let primeros = mascara.slice(0, -4);
  
      for(let i = 0 ; i<numberCard.length-4 ; i++){ 
          //igualamos los numeros con el # y guardamos mapeando segun la condicion
          primeros[i]="#";
          //todoMenosCuatro= todoMenosCuatro[i];
          }
          // convinado los numeros 
          let maskifyCard = (primeros.concat(ultimos)).join("");
          //console.log(maskifyCard)
          return  alert("maskifyCard")
      }
  console.log(getMask);*/






/*//declaraciòn de numeros
let ejem = 4083952015263;
//conversión a string, a array , revertimos y convertimos a numeros elos elementos del array
let conver = ejem.toString().split("").reverse().map(Number);
//trabajor con los pares y los hemos * 2 y con push estamos empujando los valores a la variable que esta vacía
let par = []
for (let i = 0; i < conver.length; i++) {
    if (i % 2 !== 0) {
        par.push(conver[i]*2)
            }
    }
//buscando los numeros de 2 cifras y le quitamos 9 para tener la suma de las dos cifras y lo estamos almacenando en la variable vacia
let sumados = []
for (let i = 0; i < par.length; i++) {
    if (par[i]>9) {
        sumados.push(par[i]-9)
  } 
}
//buscando los numeros que no fueron de 2 cifras y los almacenamos en la variable vacía, lo estamos * 1 para no cambiar nada
let noSumados = []
for (let i = 0; i < par.length; i++) {
    if (par[i]<9) {
        noSumados.push(par[i]*1)
  }
    
}
//estamos trabajando con los numeros impares y los estamos almacenando en la variuable vacía
let impar = []
for (let i = 0; i < conver.length; i++) {
    if (i % 2 == 0) {
        impar.push(conver[i]*1)
    }
   
}
//const array3 = array1.concat(array2); esto sirve para concatenar los array
let concatenando = impar.concat(sumados).concat(noSumados);
//const reducer = (previousValue, currentValue) => previousValue + currentValue; hemos sumado 
let sumaTotal = concatenando.reduce((previousValue, currentValue) => previousValue + currentValue);
if (sumaTotal % 10 == 0){
    alert ("Tu tarjeta es válida")
   }
else {
    alert ("Tu tarjeta no es válida")
}*/



