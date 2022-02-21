const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

let itenList = document.getElementsByTagName('li')
var ativo = 0;
console.log(itenList);

for (let index = 0; index < itenList.length; index += 1) {
    itenList[index].addEventListener('click', function(){
        if (index !== ativo) {
            itenList[index].classList.add('tech')
            itenList[ativo].classList.remove('tech')
            ativo = index
        }
    })
}
// console.log(itenList[ativo])
//    itenList[index].onclick = function(){
//     console.log(itenList[index])
//     if (itenList[index].classList.length !== 0) {
//         itenList[index].classList.remove('tech')
//     }
//     else {
//         itenList[index].classList.add('tech')
//     } 
            
// } 


console.log(input.placeholder)

function addTechLike() {
    itenList[ativo].innerText = input.value;
}
input.addEventListener('dblclick', addTechLike)

function goToPorfifolio() {
    window.open('https://cassiusbessa.github.io/')
}

myWebpage.addEventListener('click', goToPorfifolio)

myWebpage.addEventListener('mouseover', function(){
    myWebpage.style.cursor = 'pointer'
})


function changeTextColor(event) {
    event.target.style.color = 'blue';
}

myWebpage.addEventListener('mouseover', changeTextColor)















// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.