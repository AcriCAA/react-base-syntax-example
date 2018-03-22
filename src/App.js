import React, { Component } from 'react';
import logo from './logo.svg';


import './App.css';
import UserInput from './UserInput/UserInput'; 
import UserOutput from './UserOutput/UserOutput'; 


class App extends Component {


  state = {

    users: [

    {name: 'Corey'},
    {name: 'Nancy'}
    ]

  }


  resetState = () => {


    this.setState (
    {
         users: [

    {name: 'Corey'},
    {name: 'Nancy'}
    ]

}

      )


  }



  nameChangedHandler = (event) => {

   this.setState( 
    { users: [


      {name: event.target.value },
       {name: event.target.value }

      ]


    }

    )


 }


 render() {
  return (

    <div className="App">
    
      <UserInput textSample='userin' 

      name={this.state.users[0].name}
      changed={this.nameChangedHandler}
      />
    
      <UserOutput 
     
     name={this.state.users[0].name}

     />
    
      <UserOutput 
      
     
      name={this.state.users[1].name}
      
      />

      <button onClick={this.resetState}>Reset State</button>

    </div>

    );
}
}

export default App;
