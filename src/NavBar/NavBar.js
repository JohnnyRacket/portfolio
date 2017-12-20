import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar (props){
    return (
        <div className="NavBar">
        <div className="NavBar-left">
            <Link className="NavBar-left-item" to="/"> John Harrison </Link>
        </div>
        <div className="NavBar-right">
            <NavLink className="NavBar-right-item" exact activeClassName="active" to="/">Home</NavLink>
            <NavLink className="NavBar-right-item" activeClassName="active" to="/about">About</NavLink>
            <NavLink className="NavBar-right-item" activeClassName="active" to="/projects">Projects</NavLink>
            <NavLink className="NavBar-right-item" activeClassName="active" to="/blog">Blog</NavLink>
        </div>
        </div>
    );
}