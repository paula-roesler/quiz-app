import getByDataJs from '../js/getByDataJs'

export default function navigation() {
  const sec_home = getByDataJs('sec_home')
  const sec_bookmarks = getByDataJs('sec_bookmarks')
  const sec_create = getByDataJs('sec_create')
  const sec_profil = getByDataJs('sec_profil')

  const bt_home = getByDataJs('bt_home')
  const bt_bookmark = getByDataJs('bt_bookmark')
  const bt_create = getByDataJs('bt_create')
  const bt_profil = getByDataJs('bt_profil')

  const page_title = getByDataJs('page_title')

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
}
