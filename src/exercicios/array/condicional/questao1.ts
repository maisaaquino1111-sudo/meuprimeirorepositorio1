// Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo

let num: number = Number(prompt("Informe o número: ")) 
 if(num %2 ===0 ){
    console.log("número par")
 }
 else
    console.log("Número impar")

if(num >=0){
    console.log("Número positivo")
}
else
    console.log("Número negativo")