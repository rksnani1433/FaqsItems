// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="header">Faqs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem eachFaq={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
