import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onSpeedIncrement = () => {
    this.setState(prevState => {
      let newSpeed = prevState.speed
      if (prevState.speed < 200 && prevState.speed + 10 <= 200) {
        newSpeed = prevState.speed + 10
      }
      return {
        speed: newSpeed,
      }
    })
  }

  onSpeedDecrement = () => {
    this.setState(prevState => {
      let newSpeed = prevState.speed
      if (prevState.speed > 0 && prevState.speed - 10 >= 0) {
        newSpeed = prevState.speed - 10
      } else {
        newSpeed = 0
      }
      return {
        speed: newSpeed,
      }
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="speed-heading">Speed is {speed}mph</h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="button primary"
            onClick={this.onSpeedIncrement}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button transparent"
            onClick={this.onSpeedDecrement}
          >
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
