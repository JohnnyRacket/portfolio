import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Intro from './Intro';
import History from './History';
import Contact from './Contact';
import Footer from './Footer';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <NavBar/>
          <Intro/>
          <Contact/>
          <History/>

          <Footer/>
        </div>
      </div>
    );
  }
}


