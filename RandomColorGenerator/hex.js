const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A",
             "B","C", "D", "E","F"]


const changeBtn = document.getElementById('click-btn')
const colorDisplay = document.querySelector('.color')
const bodySpace = document.body
let colorGenerated = "#"

bodySpace.style.background = "#f1f5f8"
//eventListeners

changeBtn.addEventListener('click', function(){
    
    for(let i = 0; i < 6; i++){
        colorGenerated += hex[randomGenerator()]
    }
    
    bodySpace.style.background = colorGenerated
    colorDisplay.textContent = colorGenerated

    colorGenerated = "#"
})

function randomGenerator(){
   let randomNumber = Math.floor(Math.random() * hex.length)
   return randomNumber
}
