import getAllByDataJs from '../js/getAllByDataJs'

export default function bookmark() {
  const bookmarkIcons = getAllByDataJs('bookmarkIcon')

  bookmarkIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('bookmarkIcon-active')
    })
  })
}
