import React, {Component} from 'react'
import ReactDOM from 'react-dom'; // this is recommended
import ContactCard from './ContactCard'
import Person from './Person'
import './App.css';




class App extends Component {

  state = {
    personObjects: [
      {
        name: "Spongebob",
        age: 10,
        phone: "(000)111-2222"
      },
      {
        name: "Patrick",
        age: 10,
        phone: "(333)444-5555"
      }
    ]
  }


render(){
  return (
    <div>
      <ContactCard name = "Erick" phone = "(123)456-7890" email = "erick@somewhere.com"/>
      <ContactCard name = "Goku" phone = "(098)765-4321" email = "goku@otherworld.com"/>
      <ContactCard name = "Killua" phone = "(800)777-7777" email = "killua@zoldyck.com"/>
      <Person
        name = "John"
        age = "17"
        phone = "(909)000-1010"
      />

      <br />

      <Person
        name = "Jacob"
        age = "18"
        phone = "(909)000-0101"
      />

      <br/>

      {this.state.personObjects.map(item => (
        <Person
          name = {item.name}
          age = {item.age}
          phone = {item.phone}
        />
      ))}

    </div>


    );
  }
}


export default App
