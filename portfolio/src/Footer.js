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
                    <div className="Footer-item">Back to the top ^</div>
                </div>
            </div>
        );
      }
}