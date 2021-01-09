import React from 'react'
import NameDisplay from './NameDisplay'

class Person extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
      //always need a return statement inside render function
      //a return function can only have one html tag
      //inside the return function, but can have multiple
      //tags in that one tag
    return (
      <div className = "personComponent">
        <NameDisplay name = {this.props.name}/>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>Phone Number: {this.props.phone}</p>
      </div>
    )
  }


}

export default Person;
