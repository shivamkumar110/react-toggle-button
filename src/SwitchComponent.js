import React, { Component } from 'react';
import Switch from "react-switch";

class SwitchComponent extends Component {
	
	render() {

		return (

			<label htmlFor="normal-switch">
		        <Switch
		          onChange={this.props.handleChange}
		          checked={this.props.checked}
		          disabled={this.props.disabled}
		          id="normal-switch"

		        />
		      </label>
		)


	}
}
export default SwitchComponent;