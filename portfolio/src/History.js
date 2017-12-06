import React, { Component } from 'react';
import './History.css';
import gator from './florida.png'
import exxon from './exxon.png'

export default class History extends Component{
    render() {
        return (
            <div className="History">
            
                <div className="History-title">History</div>

                <div className="History-items">
                    <div className="History-item">
                        <img src={gator} className="History-item-picture"/>
                        <div className="History-item-info">
                            <div className="History-item-info--name"> University of Florida</div>
                            <div className="History-item-info--date"> 2012 - 2016</div>
                            <div className="History-item-info--position"> Bachelors of Computer Science</div>
                        </div>
                    </div>

                    <div className="History-item">
                        <img src={exxon} className="History-item-picture"/>
                        <div className="History-item-info">
                            <div className="History-item-info--name"> ExxonMobil</div>
                            <div className="History-item-info--date"> 2016 - 2018</div>
                            <div className="History-item-info--position"> Software Engineer</div>
                        </div>
                    </div>
                </div>
            
            </div>
        );
      }
}