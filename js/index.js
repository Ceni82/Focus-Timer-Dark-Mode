

import Timer from "./timer.js"
import Controls from "./controls.js"; 
import {elements} from "./elements.js";
import Sound from "./sounds.js";



const {
    buttonPlay,
    buttonStop,
    buttonPause,
    buttonDown,
    buttonUp,
    buttonTree,
    buttonRains,
    buttonHouse,
    buttonFire,
    minutes,
    minutesDisplay,
    secondsDisplay,
    buttonDark,
    buttonLight,
    timeControls,
    buttonCards,
    volTree,
    volHouse,
    volFire,
    volRain

} = elements



const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonDown,
    buttonUp,
    buttonDark,
    buttonLight,
   

})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
     minutes,
    resetControls: Controls.reset,
   
})

const sound = Sound()


buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
    
})


buttonStop.addEventListener('click', function(){
    controls.stop()
    timer.reset()
    sound.pressButton()
    
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
})

buttonDown.addEventListener('click', function() {
    timer.minuteDown()
    sound.pressButton()
})

buttonUp.addEventListener('click', function() {
  timer.minuteUp()
  sound.pressButton()

})
buttonDark.addEventListener('click', () => {
    const dayNight = document.body;
    dayNight.classList.toggle("modeNight");
    
   

   sound.pressButton()
   buttonDark.classList.remove('hide')
   buttonLight.classList.remove('hide')
   buttonPlay.classList.toggle('Col')
   buttonStop.classList.toggle('Col')
   buttonUp.classList.toggle('Col')
   buttonDown.classList.toggle('Col')
   buttonCards.classList.toggle('colorCard')
   

   
})




buttonTree.addEventListener('click', () => {
    buttonTree.classList.toggle('Color')
    buttonRains.classList.remove('Color')
    buttonHouse.classList.remove('Color')
    buttonFire.classList.remove('Color')
    
    sound.pressButton()
    sound.bgTree.play()
    sound.bgRains.pause()
    sound.bgHouse.pause()
    sound.bgFire.pause()

  })
  
  buttonRains.addEventListener('click', () => {
    buttonRains.classList.toggle('Color')
    buttonTree.classList.remove('Color')
    buttonHouse.classList.remove('Color')
    buttonFire.classList.remove('Color')
    
    sound.pressButton()
    sound.bgRains.play()
    sound.bgTree.pause()
    sound.bgHouse.pause()
    sound.bgFire.pause()
  })
  
  buttonHouse.addEventListener('click', () => {
    buttonHouse.classList.toggle('Color')
    buttonRains.classList.remove('Color')
    buttonTree.classList.remove('Color')
    buttonFire.classList.remove('Color')
   
    
    sound.pressButton()
    sound.bgHouse.play()
    sound.bgTree.pause()
    sound.bgRains.pause()
    sound.bgFire.pause()
  })

  buttonFire.addEventListener('click', () => {
    buttonFire.classList.toggle('Color')
    buttonHouse.classList.remove('Color')
    buttonRains.classList.remove('Color')
    buttonTree.classList.remove('Color')

    sound.pressButton()
    sound.bgFire.play()
    sound.bgTree.pause()
    sound.bgHouse.pause()
    sound.bgRains.pause()
  })



  volTree.addEventListener('input', function () {
    sound.bgTree.volume = volTree.value
  })

  volRain.addEventListener('input', function () {
    sound.bgRains.volume = volRain.value
  })

  volHouse.addEventListener('input', function () {
    sound.bgHouse.volume = volHouse.value
  })

  volFire.addEventListener('input', function () {
    sound.bgFire.volume = volFire.value
  })


    