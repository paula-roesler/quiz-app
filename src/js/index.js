console.log('Hallo')

const sec_home = document.querySelector('[data-js="sec_home"]')
const sec_bookmarks = document.querySelector('[data-js="sec_bookmarks"]')
const sec_create = document.querySelector('[data-js="sec_create"]')
const sec_profil = document.querySelector('[data-js="sec_profil"]')

const bt_home = document.querySelector('[data-js="bt_home"]')
const bt_bookmark = document.querySelector('[data-js="bt_bookmark"]')
const bt_create = document.querySelector('[data-js="bt_create"]')
const bt_profil = document.querySelector('[data-js="bt_profil"]')

const page_title = document.querySelector('[data-js="page_title"]')
const bookmarkIcons = document.querySelectorAll('[data-js="bookmarkIcon"]')
const txtAnswer = document.querySelectorAll('[data-js="txt_answer"]')

const createForm = document.querySelector('[data-js="createForm"]')
const createQuestion = document.querySelector('[data-js="input_question"]')

createForm.addEventListener('submit', event => {
  event.preventDefault()
  createForm.reset()
  createQuestion.focus()
})

const questionCards = document.querySelectorAll('[data-js="question_card"]')

questionCards.forEach(card => {
  const button = card.querySelector('[data-js="bt_answer"]')
  const answer = card.querySelector('[data-js="txt_answer"]')

  button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})

bt_home.classList.add('active')
bt_home.addEventListener('click', () => {
  sec_home.classList.remove('hidden')
  sec_bookmarks.classList.add('hidden')
  sec_create.classList.add('hidden')
  sec_profil.classList.add('hidden')

  bt_home.classList.add('active')
  bt_bookmark.classList.remove('active')
  bt_create.classList.remove('active')
  bt_profil.classList.remove('active')

  page_title.textContent = 'Home'
})

bt_bookmark.addEventListener('click', () => {
  sec_home.classList.add('hidden')
  sec_bookmarks.classList.remove('hidden')
  sec_create.classList.add('hidden')
  sec_profil.classList.add('hidden')

  bt_home.classList.remove('active')
  bt_bookmark.classList.add('active')
  bt_create.classList.remove('active')
  bt_profil.classList.remove('active')

  page_title.textContent = 'Bookmarks'
})

bt_create.addEventListener('click', () => {
  sec_home.classList.add('hidden')
  sec_bookmarks.classList.add('hidden')
  sec_create.classList.remove('hidden')
  sec_profil.classList.add('hidden')

  bt_home.classList.remove('active')
  bt_bookmark.classList.remove('active')
  bt_create.classList.add('active')
  bt_profil.classList.remove('active')

  page_title.textContent = 'Create'
})

bt_profil.addEventListener('click', () => {
  sec_home.classList.add('hidden')
  sec_bookmarks.classList.add('hidden')
  sec_create.classList.add('hidden')
  sec_profil.classList.remove('hidden')

  bt_home.classList.remove('active')
  bt_bookmark.classList.remove('active')
  bt_create.classList.remove('active')
  bt_profil.classList.add('active')

  page_title.textContent = 'Profile'
})

bookmarkIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('bookmarkIcon-active')
  })
})
