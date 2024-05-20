// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isShowFirstName: false,
    isShowLastName: false,
  }

  onShowHide = () => {
    this.setState(prevState => ({
      isShowFirstName: !prevState.isShowFirstName,
    }))
  }

  onShowLastName = () => {
    this.setState(prevState => ({
      isShowLastName: !prevState.isShowLastName,
    }))
  }

  render() {
    const {isShowFirstName, isShowLastName} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              onClick={this.onShowHide}
              className="show-hide-button"
            >
              Show/Hide FirstName
            </button>
            {isShowFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              onClick={this.onShowLastName}
              className="show-hide-button"
            >
              Show/Hide FirstName
            </button>
            {isShowLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
