import {
  btnPlay,
  btnPause,
  btnStop,
  btnIncrement,
  btnDecrement,
  btnCoffeSound,
  btnFireplaceSound,
  btnForestSound,
  btnRainSound
} from './elements.js'

export default function({timer, sounds}){

  btnPlay.addEventListener('click', handleClickPlay);
  btnPause.addEventListener('click', handleClickPause);
  btnStop.addEventListener('click', handleClickStop);
  btnIncrement.addEventListener('click', handleClickIncrement);
  btnDecrement.addEventListener('click', handleClickDecrement);
  btnForestSound.addEventListener('click', handleClickForestSound);
  btnRainSound.addEventListener('click', handleClickRainSound);
  btnCoffeSound.addEventListener('click', handleClickCoffeSound);
  btnFireplaceSound.addEventListener('click', handleClickFireplaceSound);

  function handleClickPlay() {
    timer.countDown();
    timer.toggleButtons()
    sounds.pressButton();
  }

  function handleClickPause() {
    timer.pause();
    sounds.pressButton();
  }

  function handleClickStop() {
    timer.stop();
    sounds.pressButton();
  }

  function handleClickIncrement() {
    timer.increment()
    sounds.pressButton();
  }

  function handleClickDecrement() {
    timer.decrement()
    sounds.pressButton();
  }

  function handleClickForestSound() {
    sounds.playForestSound()
    activeForestButton()
  }

  function handleClickRainSound() {
    sounds.playRainSound()
    activeRainButton()
  }

  function handleClickCoffeSound() {
    sounds.playCoffeSound()
    activeCoffeButton()
  }

  function handleClickFireplaceSound() {
    sounds.playFireplaceSound()
    activeFireplaceButton()
  }

  function activeForestButton() {
    buttonClicked(btnForestSound)
    btnRainSound.classList.remove('clicked')
    btnFireplaceSound.classList.remove('clicked')
    btnCoffeSound.classList.remove('clicked')
  }

  function activeRainButton() {
    buttonClicked(btnRainSound)
    btnForestSound.classList.remove('clicked')
    btnFireplaceSound.classList.remove('clicked')
    btnCoffeSound.classList.remove('clicked')
  }

  function activeCoffeButton() {
    buttonClicked(btnCoffeSound)
    btnRainSound.classList.remove('clicked')
    btnFireplaceSound.classList.remove('clicked')
    btnForestSound.classList.remove('clicked')
  }

  function activeFireplaceButton() {
    buttonClicked(btnFireplaceSound)
    btnRainSound.classList.remove('clicked')
    btnForestSound.classList.remove('clicked')
    btnCoffeSound.classList.remove('clicked')
  }

  function buttonClicked(button) {
    button.classList.contains('clicked') ? button.classList.remove('clicked') : button.classList.add('clicked');
  }


}
