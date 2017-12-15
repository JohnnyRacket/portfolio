import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar (props){
    return (
        <div className="NavBar">
        <div className="NavBar-left">
            <Link className="NavBar-left-item" to="/"> John Harrison </Link>
        </div>
        <div className="NavBar-right">
            <Link className="NavBar-right-item" to="/about">About</Link>
            <Link className="NavBar-right-item" to="/blog">Blog</Link>
            <Link className="NavBar-right-item" to="/projects">Projects</Link>
            <Link className="NavBar-right-item" to="/contact">Contact</Link>
        </div>
        </div>
    );
}