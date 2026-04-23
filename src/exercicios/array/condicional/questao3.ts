//Crie um programa que solicite dois números e simule um menu de uma calculadora:
//1 - Soma
//2 - Subtração
//3 - Multiplicação
//4 - Divisão
//Use switch...Case

let num1: number = Number(prompt("Informe um número: "))
let num2: number = Number(prompt("Informe outro número: "))
let opc: number = Number(prompt("digite: 1-Soma; 2-Subtração; 3-Multiplicação; 4-Divisão"))

switch(opc){
    case 1:
        let soma =num1+num2
        console.log(soma)
    break

    case 2: 
        let subtracao =num1-num2
        console.log(subtracao)
    break

    case 3: 
        let multiplicacao =num1*num2
        console.log(multiplicacao)
    break

    case 4: 
        let divisao =num1/num2
        console.log(divisao)
    break

    default:
        console.log("Opição inválida")
    }