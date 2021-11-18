const validator = {

    isValid:(numberCard)=>{
  
        //conversión a string, a array , revertimos y convertimos a numeros elos elementos del array
        let conver = numberCard.split("").reverse().map(Number);
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
            return true 
        }
        else {
            return false
        }
    },

    maskify:(numberCard)=>{
        
        let getMask = numberCard.split("");
        let primeros = getMask.slice(0, -4);
        for(let i=0; i < primeros.length; i++){
            primeros[i] = "#"
        }
        let ultimos = getMask.slice(-4);
        let primerosUltimos = primeros.concat(ultimos).join("");
        return primerosUltimos
    }



}
  //export default validator;

 


export default validator;