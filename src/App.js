import React, { Component } from 'react';
import './App.css';
import SwitchComponent from './SwitchComponent'
const MAX_THROTTLE = 5

class App extends Component {
  constructor() {
    super();
    this.state = { 
      checked: false,
      currentThrottle: 0,
      isDisabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetThrottle = this.resetThrottle.bind(this);
  }
  handleChange(checked) {
    if (this.state.currentThrottle < MAX_THROTTLE) {
      let currentThrottle = this.state.currentThrottle
      currentThrottle+= 1
      this.setState({ checked, currentThrottle });
    }
    else {
      this.setState({isDisabled: true})
      alert('Whoa! You clicked too much')
    }
  }
  resetThrottle() {
    this.setState({currentThrottle: 0,  checked: false, isDisabled: false})
  }
  render() {
    return(
        <div className="container">
          <SwitchComponent
          handleChange={this.handleChange}
          checked={this.state.checked}
          disabled={this.state.isDisabled}/>
          <div>
            <button onClick={this.resetThrottle}>RESET </button>
          </div>

          <div>
            <h3> About - Switch Component </h3>
            <ul>
              <li>Simple: The switch turns to on/off when the user presses it </li>
              <li>Throttling: The developer who is using the switch component, 
                can specify that the switching should be throttled to 5 times only. 
                So, if user presses the switch more than 5 times, it will show the user a message saying 
                "Whoa! You clicked too much" and it will disable the switch </li>
              <li>Reset button: The developer implements an "Reset" button 
              (which is not part of switch component) and when the button is clicked, 
              the switch component resets its state</li>
            </ul>
          </div>
          
        </div>
        
      )
  }
}

export default App;
