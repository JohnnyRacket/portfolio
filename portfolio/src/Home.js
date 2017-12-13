import React, { Component } from 'react';
import Intro from './Intro';
import History from './History';
import Contact from './Contact';

export default function Home (props){
    return (
        <div className="Home">
            <Intro/>
            <Contact/>
        </div>
    );
}