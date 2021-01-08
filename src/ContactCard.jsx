import React from 'react'
import ReactDOM from 'react-dom'

class ContactCard extends React.Component {
  render(){
    return <h1>Name: {this.props.name} || Phone: {this.props.phone} || Email: {this.props.email}</h1>
  }
}


export default ContactCard
