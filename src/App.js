import './App.css';
import NavBar from './Components/NavBar';
import React, { Component } from 'react'
import News from './Components/News';

export default class App extends Component {
  c = "Rohan";
  render() {
    return (
      <>

        <div>
          <NavBar/>
          <News/>
        </div>

      </>
    )
  }
}
