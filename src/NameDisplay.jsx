import React, {Component} from 'react'

class NameDisplay extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className = "nameDisplay">
        <p> Name(Repeated): {this.props.name}</p>
      </div>
    )
  }
}

export default NameDisplay;
