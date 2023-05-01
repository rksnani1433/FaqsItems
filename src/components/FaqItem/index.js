// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachFaq} = props
  const {id, questionText, answerText} = eachFaq
  return (
    <li className="list-container">
      <div className="imge-title-container">
        <p className="question-text">{questionText}</p>
        <button className="minus-plus-button" type="button">
          <img
            className="minus-image"
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            alt="plus-mius"
          />
        </button>
      </div>
      <div className="container-answer">
        <hr className="hr-line" />
        <p className="answer-text">{answerText}</p>
      </div>
    </li>
  )
}
export default FaqItem
