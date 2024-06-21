let BtnSFX = new Audio("./sound/btn.mp3") 
let color = 0;
function ChangeColor() {
    BtnSFX.play()

    color = Math.floor(Math.random()*7)
    console.log(color)

}