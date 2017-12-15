import React, { Component } from 'react';
import './Footer.css';
import linkedin from './linkedin.svg';
import facebook from './facebook.svg';
import gmail from './gmail.svg';
import github from './github.svg';

export default class Footer extends Component{
    render() {
        return (
            <div className="Footer" id="contact">
            <a className="Footer-item" href="https://github.com/JohnnyRacket" target="blank">
                <img src={github} className="Footer-item--logo"/>
                <div className="Footer-item--link">johnnyracket</div>
            </a>

            <a className="Footer-item" href="mailto:john.randolph.harrison@gmail.com" target="blank">
                <img src={gmail} className="Footer-item--logo"/>
                <div className="Footer-item--link">john.randolph.harrison@gmail.com</div>
            </a>

            <a className="Footer-item" href="https://www.linkedin.com/in/johnrandolphharrison/" target="blank">
                <img src={linkedin} className="Footer-item--logo"/>
                <div className="Footer-item--link">johnrandolphharrison</div>
            </a>

            <a className="Footer-item" href="https://www.facebook.com/john.randolph.harrison" target="blank">
                <img src={facebook} className="Footer-item--logo"/>
                <div className="Footer-item--link">john.randolph.harrison</div>
            </a>
        </div>
        );
      }
}