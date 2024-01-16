const abrir = document.getElementById('open')
const cerrar = document.getElementById('close')
const containerOverlay = document.getElementById('container-overlay')

abrir.addEventListener('click', () => {
  containerOverlay.style.animation = 'showMenu 0.5s ease-in forwards'
  containerOverlay.style.display = 'flex'
})
cerrar.addEventListener('click', () => {
  containerOverlay.style.animation = 'closeMenu 0.5s ease-in forwards'
  setTimeout(() => {
    containerOverlay.style.display = 'none'
  }, '500')
})
containerOverlay.addEventListener('click', () => {
  containerOverlay.style.animation = 'closeMenu 0.5s ease-in forwards'
  setTimeout(() => {
    containerOverlay.style.display = 'none'
  }, '500')
})