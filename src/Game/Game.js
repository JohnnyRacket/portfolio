import React, { Component } from 'react';
import './Game.css';

export default class Game extends Component{
    componentDidMount() {
        // let elysian = require('elysian');
        // console.log(elysian);
        // elysian.create("game", 900, 200);
        // elysian.GameEngine.register( new elysian.GameObjects.ActiveObject(100,100,50,50,0,'test'));
        const script = document.createElement("script");
        script.src = "bundle.js";
        script.async = true;
        document.body.appendChild(script);
    }
   
    render(){
        return(
            <div>
                <div id="canvasWrapper" className="game">
                    <canvas id="myCanvas" className="game-canvas"></canvas>
                </div>
            <div>&larr; arrow keys to turn &rarr;, double tap to juke</div>
            </div>
        );
    }
}