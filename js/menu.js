const abrir = document.getElementById('open')
const cerrar = document.getElementById('close')
const containerOverlay = document.getElementById('container-overlay')
const headerFixed = document.getElementById('headerFixed')

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

const menucon = document.getElementById('menu-contacto')
const whats = document.getElementById('whats')
const tel = document.getElementById('tel')
menucon.addEventListener('click', function () {
  whats.classList.toggle('show-whats')
  tel.classList.toggle('show-tel')
})