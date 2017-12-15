import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import History from './History/History';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Blog from './Blog/Blog';


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


