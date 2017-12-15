import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import History from './History';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Blog from './Blog';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Container">
            <NavBar/>
            


            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/history" component={History}/>



            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


