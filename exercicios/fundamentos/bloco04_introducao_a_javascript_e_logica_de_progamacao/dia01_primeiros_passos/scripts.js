let salarioBruto = 3000;
let descontoIr;
let descontoInss;

if (salarioBruto <= 1556.94) {
    descontoInss = salarioBruto * 0.92;
    console.log('Sua alíquota INSS é de 8% e seu salário com desconto é de ' + descontoInss);
}

else if (salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * 0.91
    console.log('Sua alíquota INSS é de 9% e seu salário com desconto é de ' + descontoInss);
}

else if (salarioBruto <= 5189.82) {
    descontoInss =  salarioBruto * 0.89
    console.log('Sua alíquota INSS é de 11% e seu salário com desconto é de ' + descontoInss)
} else {
    descontoInss = salarioBruto - 570,88
    console.log('Sua alíquota INSS é de 570,88 e seu salário com desconto é de ' + descontoInss)
}

if (descontoInss <= 1903.98) {
    descontoIr = descontoInss * 1
    console.log('Você é isento de imposto de renda')

} else if (descontoInss <= 2826.65) {
    descontoIr = descontoInss - (descontoInss * 0.075 - 142.80)
    console.log('Sua alíquoata do IRPF é de 7.5%, sua parcela a deduzir é de R$142,80. Seu salário líquido é R$' + descontoIr)
    
} else if (descontoInss <= 3751.05) {
    descontoIr = descontoInss - (descontoInss * 0.15 - 354.80)
    console.log('Sua alíquoata do IRPF é de 15%, sua parcela a deduzir é de R$354,80. Seu salário líquido é R$' + descontoIr)

} else if (descontoInss <= 4664.68) {
    descontoIr = descontoInss - (descontoInss * 0.225 - 636.13)
    console.log('Sua alíquoata do IRPF é de 22,5%, sua parcela a deduzir é de R$636,31. Seu salário líquido é R$' + descontoIr)

} else {
    descontoIr = descontoInss - (descontoInss * 0.275 - 869.36)
    console.log('Sua alíquoata do IRPF é de 27,5%, sua parcela a deduzir é de R$869,36. Seu salário líquido é R$' + descontoIr)
}


























    

