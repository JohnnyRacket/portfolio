import React, { Component } from 'react';
import './About.css';
import Game from '../Game/Game';

export default function About (props){
    return (
        <div className="about">
            <div className="title"> About Me </div>
            <div className="content">
                <div className="description">
                
                    I grew up in the golden ages of flash games and as a child I always wanted to make one. 
                    To me it was the coolest thing that you had all these games that obviously (in most cases) a single person had made. 
                    My whole childhood I spent wanting learn ActionScript and make my own flash game. I learned enough to make of of those "don't let your mouse touch the wall" type games, but never anything serious.
                    <br/><br/>
                    So after spending a year as a microbiology major in college, I turned to look at other majors because I wasn't dead set on pre-health, and found myself once again enchanted with the idea that I could make things if I could code. 
                    I have never looked back on the decision (to switch to CS) and making things has been what I have loved doing ever since! 
                    A funny story I like to tell is that as an avid Runescape player in my early days I could type incredibly fast with two fingers, especially from "merching" stuff. But feeling devoted to learning to code, I forced myself to learn how to type correctly before fully switching my major because I thought it would be absurd to be a programmer that "hunts and pecks". 
                    <br/><br/>
                    College was a blur of learning and experiences (one of the most memorable being winning my schools hackathon, SwampHacks 2015). 
                    Afterwards I went out into the workforce and I've been learning while creating different systems and applications.
                    <br/><br/>
                    My curiosity and want to know more leads me to reading a lot more than I used to. 
                    I am never done learning, and as a result, I love exploring and implementing; from microservice architectures, cqrs event sourcing systems, building game engines and games from scratch and other really cool stuff!
                    <br/><br/>
                    <strong>Anyways, enough about me, enjoy the HTML5/Typescript game I built from scratch to fufill my childhood goals!<br/> <a href="https://github.com/JohnnyRacket/playmaker" target="_blank">https://github.com/JohnnyRacket/playmaker</a></strong>
                </div>

                <Game/>
            </div>

            <div className="grid">
                <div className="grid-item">
                    <div className="grid-item--title"> Interests/Skills </div>
                    <div className="grid-item--item"> System Architecture </div>
                    <div className="grid-item--item"> Game Development </div>
                    <div className="grid-item--item"> Frontend Design </div>
                    <div className="grid-item--item"> System Design/Implementation </div>
                    <div className="grid-item--item"> Basic Machine Learning </div>
                </div>
                <div className="grid-item">
                    <div className="grid-item--title"> Languages &amp; Tools </div>
                    <div className="grid-item--item"> C#, Javascript + Typescript, Java, Python </div>
                    <div className="grid-item--item"> Grunt/Gulp, Yarn/NPM, SCSS/CSS, HTML </div>
                    <div className="grid-item--item"> Azure, Azure Serverless </div>
                    <div className="grid-item--item"> Angularjs, React, React Native, Node </div>
                    <div className="grid-item--item"> Pandas, SciKit, Tableau</div>
                </div>
                <div className="grid-item">
                    <div className="grid-item--title"> Interesting Accomplishments </div>
                    <div className="grid-item--item"> Published elysian to NPM </div>
                    <div className="grid-item--item"> Created a microservices driven system </div>
                    <div className="grid-item--item"> Created an event sourcing/cqrs system </div>
                    <div className="grid-item--item"> SwampHacks 2015 1st Place </div>
                    <div className="grid-item--item"> Eagle Scout </div>
                </div>
            </div>

        </div>
    );
}