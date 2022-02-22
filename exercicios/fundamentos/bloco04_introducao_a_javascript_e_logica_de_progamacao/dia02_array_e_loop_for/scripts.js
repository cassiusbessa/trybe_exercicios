let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let comparar = []

for (let index = 0; index < numbers.length; index += 1) {
    comparar.push(numbers[index]);
    
    for (let indice= 0; indice < comparar.length; indice += 1) {
        if (numbers[index] > comparar[indice]) {
            console.log(numbers[index])            
        }    
}
}
console.log(comparar)
