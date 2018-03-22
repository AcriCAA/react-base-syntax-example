import React from 'react'

import './UserInput.css'; 


const UserInput = (props) => {

// This is how you do partile specific styles
const inputStyle = {

	border: '2px solid red'

}

return (

		<div className="UserInput">
		
		<h1>User Input</h1>
		<input style={inputStyle} type="text" onChange={props.changed} value={props.name}/>
		</div>
	)

};

export default UserInput; 