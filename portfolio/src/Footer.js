import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component{
    render() {
        return (
            <div className="Footer">
                <div className="Footer-left">
                    <div className="Footer-item">© John Harrison</div>
                </div>
                <div className="Footer-right">
                    <a className="Footer-item" href="#">Back to the top ^</a>
                </div>
            </div>
        );
      }
}