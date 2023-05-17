// make variables to target everything
// use numbers and arrays to change the color
// Make the button change the color of the background
// Coded by: Eighton-Lee Paulse

const backgroundColors = ["aqua", "orangered", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];


const btn = document.querySelector(".button-to-change");
const colorName = document.querySelector(".name-of-color")

btn.addEventListener('click', function (){
    const randomNumber = getRandomColor()
    document.body.style.backgroundColor = backgroundColors[randomNumber]
    colorName.textContent = backgroundColors[randomNumber]
    colorName.style.color = backgroundColors[randomNumber]
})

// Joel's code

// btn.addEventListener('click', ()=>{
//     const randomNumber = getRandomColor()
//     document.body.style.backgroundColor = backgroundColors[randomNumber];
//     colorName.textContent = backgroundColors[randomNumber];
//     colorName.style.color = backgroundColors[randomNumber];
// })
function getRandomColor(){
    return Math.floor(Math.random() * 15);
}