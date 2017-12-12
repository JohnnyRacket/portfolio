import React, { Component } from 'react';
import './game.css';

export default class Game extends Component{
    componentDidMount() {
        let elysian = require('elysian');
        console.log(elysian);
        elysian.create("game", 900, 200);
        elysian.GameEngine.register( new elysian.GameObjects.ActiveObject(100,100,50,50,0,'test'));
    }
   
    render(){
        return(
            <div className="game">
                <canvas id="game" className="game-canvas"></canvas>
            </div>
        );
    }
}