import getByDataJs from '../js/getByDataJs'
import getAllByDataJs from '../js/getAllByDataJs'

export default function questionCards() {
  const questionCards = getAllByDataJs('question_card')

  questionCards.forEach(card => {
    const button = getByDataJs('bt_answer', card)
    const answer = getByDataJs('txt_answer', card)

    button.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })
}
