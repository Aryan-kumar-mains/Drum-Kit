var lenOfDrum = document.querySelectorAll("button").length;

for(var i = 0;i < lenOfDrum;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var keyPressed = this.innerHTML;
        playSound(keyPressed);
        buttonAnimation(keyPressed);
    })
}

document.addEventListener("keypress",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(keyPressed){
    switch(keyPressed){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
    }
}

function buttonAnimation(keyPressed){
    document.querySelector("."+keyPressed).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + keyPressed).classList.remove("pressed");
    }, 100);
}
