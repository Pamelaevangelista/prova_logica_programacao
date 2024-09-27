/*Crie um programa que solicite ao usuário 3 notas (valores numéricos) e calcule a média aritmética dessas notas. 
Se a média for maior ou igual a 7, exiba a mensagem "Aprovado"; caso contrário, exiba "Reprovado".*/
var nota1 = 7;
var nota2 = 6;
var nota3 = 5;

var media =(nota1 + nota2 + nota3)/3;
console.log(media)

if(media >7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
