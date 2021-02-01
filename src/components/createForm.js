import getByDataJs from '../js/getByDataJs'
import getAllByDataJs from '../js/getAllByDataJs'

export default function createForm() {
  const lable = getAllByDataJs('create__lable')
  const counter = getByDataJs('create__counter')
  const inputQuestion = getByDataJs('create__input')
  const inputQuestions = getAllByDataJs('create__input')

  const createForm = getByDataJs('createForm')
  const createQuestion = getByDataJs('create__question-lable')

  lable.forEach(lable => {
    inputQuestion.addEventListener('input', () => {
      const eingabe = inputQuestion.value.length
      counter.innerHTML = 100 - eingabe + '/100'
    })
  })

  createForm.addEventListener('submit', event => {
    event.preventDefault()
    createForm.reset()
    create__input_question.focus()
  })
}
