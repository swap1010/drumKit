// document.querySelector('button').addEventListener("click",handleClick);
// function handleClick(){
// alert('i got clicked');
// } this is for calling function with name

 // fo mouse click
for(var i=0;i<(document.querySelectorAll('.drum').length);i++){
document.querySelectorAll('.drum')[i].addEventListener("click",function (){
  var btn = this.innerHTML;
  makesound(btn);
  buttonAnimation(btn);
});
}
// for keyboard click...... event or evt or anything both are same
document.addEventListener('keydown',function(event){
makesound(event.key);
buttonAnimation(event.key);
});
function makesound(key){
  switch(key){

    case "w": var tom1 = new Audio('sounds/tom-1.mp3');
                          tom1.play();
                          break;

    case "a": var tom2 = new Audio('sounds/tom-2.mp3');
              tom2.play()
              break;

    case "s": var tom3 = new Audio('sounds/tom-3.mp3');
                        tom3.play()
                        break;

    case "d": var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play()
              break;

    case "j": var snare = new Audio('sounds/snare.mp3');
                        snare.play()
                        break;

    case "k": var crash = new Audio('sounds/crash.mp3');
                                  crash.play()
                                  break;

    case "l": var kick_bass = new Audio('sounds/kick-bass.mp3');
                  kick_bass.play()
                  break;

    default : console.log();
  }
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector('.'+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
  activeButton.classList.remove("pressed");},100);
}
