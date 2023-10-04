const burgerBtn = document.querySelector('.burger')
const barsIco =document.querySelector('.fa-bars')
const xIvo = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

const handelNav = () => {
  nav.classList.toggle('active')
  burgerBtn.classList.toggle('active')
  xIvo.classList.toggle('hide')
  barsIco.classList.toggle('hide')
}
burgerBtn.addEventListener('click', handelNav)