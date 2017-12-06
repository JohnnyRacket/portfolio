import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component{
    render() {
        return (
          <div className="NavBar">
            <div className="NavBar-left">
                <div className="NavBar-left-item"> John Harrison </div>
            </div>
            <div className="NavBar-right">
                <a className="NavBar-right-item" href="#about">About</a>
                <a className="NavBar-right-item" href="#projects">Projects</a>
                <a className="NavBar-right-item" href="#contact">Contact</a>
            </div>
          </div>
        );
      }
}