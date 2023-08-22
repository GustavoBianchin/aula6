/*
*GUSTAVO BIANCHIN
*
*/

/*
* 1. resposta 

let a = 10
let b = 10
console.log(b)
b = 5
console.log(a, b)

a = 10
b = 5


* 2. resposta

let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)


a = 10
b = 10
c = 10

* 3. resposta

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)


let horasDia = prompt("Quantas horas você trabalha por dia?")
let recebeDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${recebeDia/horasDia} por hora`)


...
*/
// exercicio 1
/*
let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

// a variavel nao contem valor e pos isso que imprime undefined

console.log(nome);
console.log(idade);

nome = prompt("Qual seu nome");
idade = prompt("Sua idade");

console.log("Olá", nome, "você tem", idade, "anos");
*/

// exercicio 2

/*
let azul = prompt("Você está usando uma roupa azul hoje?");
let gremio = prompt("Você é gremista?");
let brasileiro = prompt("Você é brasileiro?");
console.log("Você está usando uma roupa azul hoje?", azul);
console.log("Você é gremista?", gremio);
console.log("Você é brasileiro?", brasileiro);
*/

//exercicio 3

let a = 10;
let b = 25;
let c = a;
a = b;
b = c;
console.log(a,b);



let p = prompt("PRIMEIRO NÚMERO");
let t = prompt("SEGUNDO NÚMERO");
p = Number(p);
t = Number(t);
console.log("x =",p+t);
console.log("y =",p*t);








