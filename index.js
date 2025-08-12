console.log("Hola mundo")

//Ciclos
/*
let contador = 0;

while(contador < 10){
    console.log(contador + 1);
    contador++;
}
contador = 0;
do{
    console.log(contador + 1)
    contador++;
}while(contador < 10);

for(let index = 0;index < 10; index++){
    console.log("bucle for:" + index);
}

let arr = [10,20,30,40,50,60,70,80,90,100];
arr.forEach(element => {
    console.log(element)
});
let persona = {
    nombre : "Luis",
    apellido: "Vega",
    edad: 26
}

for (const atributo in persona) {
    console.log(`Key:${atributo}, Value: ${persona[atributo]}`)
}

for (const element of arr) {
    console.log("for of: " + element)
}

let cadena = "Hola mundo";
for (const element of cadena) {
    console.log(element)
}

*/
//Manejo de errores
/*
try {
    console.log("Se agrega el codigo a evaluar");
    noExiste
} catch (error) {
    console.log("Captura cualquier error surgido o lanzado en el try");
    console.log(error)
}
finally{
    console.log("Se ejecutará siempre")
}

try {
    let numero = "a";
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un número");
    }
    console.log(numero * numero)
} catch (error) {
    console.log("Se produjo el siguiente error " + error)
}*/


//break & continue
/*
const numeros = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numeros.length; i++) {
    if(i === 5 ) break;
    console.log(numeros[i]);
    
}
    
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]%2 != 0) continue;
    console.log(numeros[i]);

}*/


//Destructuración
/*
let numeros = [1,2,3];

const [uno,dos,tres] = numeros;
console.log(uno,dos,tres);

let persona = {
    nombre : "Luis",
    apellido: "Vega",
    edad: 26
}

let {nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);
*/

//Objetos literales
/*
let nombre = "Luis",
edad = 26;

const persona = {
    nombre:nombre,
    edad: edad,

    saludar: function(){
        console.log("Saluda")
    }
}

console.log(persona)
persona.saludar()

const persona2  ={
    nombre,
    edad,
    saludar(){
        console.log("Saluddaa")
    }
}

console.log(persona2)
persona2.saludar();
*/

//PArametros Rest & operadores spread

/*
function sumar(a,b, ...c){
    let res = a + b;
    c.forEach(function(n){
        res +=n;
    })

    return res;
}

console.log(sumar(1,2))
console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4))

const arr1 = [1,2,3,4,5],
arr2 = [6,7,8,9,0];

console.log(arr1,arr2)
const arr3 = [...arr1,...arr2]
console.log(arr3)


*/
//Arrow function
/*
const saludar = nombre =>{

saludar("Luis")

const numeros = [1,2,3,4,5];

numeros.forEach((el,index)=>{
    console.log(`El elemento ${el} esta en la posicion ${index}`)
})    console.log(`Hola ${nombre}`)
}
*/

//////////////POO
//funcion constructora
function Animal(nombre,genero){
    this.nombre = nombre;
    this.genero = genero;

    
}

Animal.prototype.sonar = function(){
    console.log("Hago ruido por que estoy vivo");
}

//Herencia prototpica

function Perro(nombre,genero,tamanio){
    this.super = Animal
    this.super(nombre,genero)
    this.tamanio = tamanio
}

Perro.prototype = new Animal()
Perro.prototype.constructor = Perro;

Perro.prototype.sonar = function(){
    console.log("Soy un perro")

}
Perro.prototype.ladrar = function(){
    console.log("Guaaaauu Guauuu")
}


const snoopy = new Perro("Snoopy","perro","chico")



class Persona{
    constructor(nombre,edad){
        this.nombre = nombre; 
        this.edad = edad;
    }

    saludar(){
        console.log("Saludar")
    }
}

class Jugador extends Persona{
    constructor(nombre,edad,nacionalidad){
        super(nombre,edad);
        this.nacionalidad = nacionalidad;
    }
    saludar(){
        console.log("Meto muchos goles");
    }
    patear(){
        console.log("Gol")
    }
}

const Luis = new Jugador("Luis",26, "Mexicano")

console.log(Luis)
Luis.saludar()
Luis.patear()

