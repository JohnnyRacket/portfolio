import React, { Component } from 'react';
import './NavBar.css';

export default function NavBar (props){
    return (
        <div className="NavBar">
        <div className="NavBar-left">
            <a className="NavBar-left-item" href="#"> John Harrison </a>
        </div>
        <div className="NavBar-right">
            <a className="NavBar-right-item" href="#about">About</a>
            <a className="NavBar-right-item" href="#about">Blog</a>
            <a className="NavBar-right-item" href="#projects">Projects</a>
            <a className="NavBar-right-item" href="#contact">Contact</a>
        </div>
        </div>
    );
}