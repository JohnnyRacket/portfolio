import React, { Component } from 'react';
import './Contact.css';
import linkedin from './linkedin.svg';
import facebook from './facebook.svg';
import gmail from './gmail.svg';
import github from './github.svg';

export default function Contact(props) {
    return (
        <div className="Contact" id="contact">
            <a className="Contact-item" href="https://github.com/JohnnyRacket" target="blank">
                <img src={github} className="Contact-item--logo"/>
                <div className="Contact-item--link">johnnyracket</div>
            </a>

            <a className="Contact-item" href="mailto:john.randolph.harrison@gmail.com" target="blank">
                <img src={gmail} className="Contact-item--logo"/>
                <div className="Contact-item--link">john.randolph.harrison@gmail.com</div>
            </a>

            <a className="Contact-item" href="https://www.linkedin.com/in/johnrandolphharrison/" target="blank">
                <img src={linkedin} className="Contact-item--logo"/>
                <div className="Contact-item--link">johnrandolphharrison</div>
            </a>

            <a className="Contact-item" href="https://www.facebook.com/john.randolph.harrison" target="blank">
                <img src={facebook} className="Contact-item--logo"/>
                <div className="Contact-item--link">john.randolph.harrison</div>
            </a>
        </div>
    );
}