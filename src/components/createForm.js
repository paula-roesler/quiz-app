import getByDataJs from '../js/getByDataJs'
import getAllByDataJs from '../js/getAllByDataJs'

export default function createForm() {
  const form = getByDataJs('createForm')
  const lables = getAllByDataJs('create__lable')
  const inputArea = getByDataJs('create__input')
  const counter = getByDataJs('create__counter')

  lables.forEach(lable => {
    inputArea.addEventListener('input', () => {
      const eingabe = inputArea.value.length
      counter.innerHTML = 100 - eingabe + '/100'
    })
  })

  createForm.addEventListener('submit', event => {
    event.preventDefault()
    form.reset()
    inputArea.focus()
  })
}
