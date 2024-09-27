/*Elabore um programa em Javascript que leia a velocidade permitida em uma estrada e a velocidade de um condutor. 
Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. 
E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave”. */

var velocidadeEstrada = parseInt(80);
var velocidadeCondutor = parseInt(90);

if( velocidadeCondutor == velocidadeEstrada){
    console.log("Sem multa")
} else if (velocidadeCondutor == ('80 * 20%')){
    console.log("Multa leve");
} else ( velocidadeCondutor > ('80 * 20%')) 
    console.log("Multa grave");