import React from 'react'

import './UserOutput.css'; 

const UserOutput = (props) => {

return (

		<div className="UserOutput">
		
		<p>{props.name}</p>
		<p>{props.changed}</p>
		
		</div>
	)

};

export default UserOutput; 