const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"]
const changeBtn = document.getElementById('click-btn')
const colorDisplay = document.querySelector('.color')
const bodySpace = document.body

bodySpace.style.background = "#f1f5f8"

//eventListeners

changeBtn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    bodySpace.style.background = colors[randomNumber]
    colorDisplay.textContent = colors[randomNumber]
    
})