console.clear()

// sections:
// data-js="home"
// data-js="bookmark"
// data-js="create"
// data-js="profil"

// classes:
// class="navigation"

// Buttons:
// fa-home fa-bookmark fa-pen fa-user

const sectionHome = document.querySelector('[data-js="home"]')
const sectionBookmark = document.querySelector('[data-js="bookmark"]')
const sectionCreate = document.querySelector('[data-js="create"]')
const sectionProfil = document.querySelector('[data-js="profil"]')

const buttonHome = document.querySelector('[data-js="bt-home"]')
const buttonBookmark = document.querySelector('[data-js="bt-bookmark"]')
const buttonCreate = document.querySelector('[data-js="bt-create"]')
const buttonProfil = document.querySelector('[data-js="bt-profil"]')

buttonHome.addEventListener('click', () => {
  sectionHome.classList.remove('hidden')
  sectionBookmark.classList.add('hidden')
  sectionCreate.classList.add('hidden')
  sectionProfil.classList.add('hidden')

  buttonHome.classList.remove('hidden')
  buttonBookmark.classList.add('hidden')
  buttonCreate.classList.add('hidden')
  buttonProfil.classList.add('hidden')
})

buttonBookmark.addEventListener('click', () => {
  sectionHome.classList.add('hidden')
  sectionBookmark.classList.remove('hidden')
  sectionCreate.classList.add('hidden')
  sectionProfil.classList.add('hidden')

  buttonHome.classList.add('hidden')
  buttonBookmark.classList.remove('hidden')
  buttonCreate.classList.add('hidden')
  buttonProfil.classList.add('hidden')
})

buttonCreate.addEventListener('click', () => {
  sectionHome.classList.add('hidden')
  sectionBookmark.classList.add('hidden')
  sectionCreate.classList.remove('hidden')
  sectionProfil.classList.add('hidden')

  buttonHome.classList.add('hidden')
  buttonBookmark.classList.readd('hidden')
  buttonCreate.classList.remove('hidden')
  buttonProfil.classList.add('hidden')
})

buttonProfil.addEventListener('click', () => {
  sectionHome.classList.add('hidden')
  sectionBookmark.classList.add('hidden')
  sectionCreate.classList.add('hidden')
  sectionProfil.classList.remove('hidden')

  buttonHome.classList.add('hidden')
  buttonBookmark.classList.readd('hidden')
  buttonCreate.classList.add('hidden')
  buttonProfil.classList.remove('hidden')
})
