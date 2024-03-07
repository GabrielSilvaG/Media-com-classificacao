/*
Faça um algoritmo que dado as 3 motas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a classificação conforme a tabela abaixo:

 Média = ((nota1 + nota2 + nota3) / 3)

 classificação:
 - Média menor que 5, reprovado;
 - Média entre 5 e 7, recuperação;
 - Média acima de 7, aprovado; 
*/


let nota1 = 5;
let nota2 = 5;
let nota3 = 9;

const notaSemestre = ((nota1 + nota2 + nota3) / 3);
console.log(notaSemestre.toFixed((3)))

if (notaSemestre < 5) {
    console.log('Reprovado');
} else if (notaSemestre >= 5 && notaSemestre <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}
