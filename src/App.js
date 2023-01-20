import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Body from './components/Body';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Body/>
      </div>
    )
  }
}

