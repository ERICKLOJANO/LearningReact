import React, {Component} from 'react'
import ReactDOM from 'react-dom'; // this is recommended
import ContactCard from './ContactCard'

import './App.css';


function App() {
  return (
    <div>
      <ContactCard name = "Erick" phone = "(123)456-7890" email = "erick@somewhere.com"/>
      <ContactCard name = "Goku" phone = "(098)765-4321" email = "goku@otherworld.com"/>
      <ContactCard name = "Killua" phone = "(800)777-7777" email = "killua@zoldyck.com"/>
    </div>


  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


export default App
