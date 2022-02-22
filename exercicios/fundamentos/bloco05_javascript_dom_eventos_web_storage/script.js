function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  
  createDaysOfTheWeek();
  
  function createDezember(){
  let monthDays = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index = 0; index < dezDaysList.length; index += 1)   {
    let dayNum = document.createElement('li')
    dayNum.classList.add('day')
    dayNum.innerText = dezDaysList[index]
    monthDays.appendChild(dayNum);
    
    
    if (dayNum.innerText == '24'|| dayNum.innerText == '31') {
        dayNum.classList.add('holiday')        
    }
    else if (dayNum.innerText == '4'|| dayNum.innerText == '11' || dayNum.innerText == '18') {
        dayNum.classList.add('friday')        
    }

    else if (dayNum.innerText == '25') {
       dayNum.className = 'day holiday friday' 
        }
    }
}
createDezember ();

function buttonCreater(string) {
let buttonContainer = document.querySelector('.buttons-container')
let button = document.createElement('button')
button.id = 'btn-holiday'
button.textContent = string
buttonContainer.appendChild(button);
}
buttonCreater('Feriado');


let feriadosDez = document.getElementsByClassName('holiday');
console.log(feriadosDez)
let butao = document.getElementById('btn-holiday')
console.log(butao)



butao.addEventListener('click', function(){
    for (let index = 0; index < feriadosDez.length; index += 1) { console.log('mudei pra transparente e depois pra verde')
        console.log(window.getComputedStyle(feriadosDez[index]).getPropertyValue('background-color'))
        if (window.getComputedStyle(feriadosDez[index]).getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)') {
            feriadosDez[index].style.backgroundColor = 'green'
            
        }
        else { console.log('não é transparante')
            feriadosDez[index].style.backgroundColor = 'rgba(0, 0, 0, 0)'           
        }

        
    }
})



  
