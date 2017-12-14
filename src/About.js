import React, { Component } from 'react';
import './About.css';
import Game from './game';

export default function About (props){
    return (
        <div className="about">
            <div className="title"> About Me </div>
            <div className="content">
                <div className="description">
                
                    I grew up in the golden ages of flash games and as a child I always wanted to make one. 
                    In my opinion it was the coolest thing that you had all these games that obviously (in most cases) a single person had made. 
                    My whole childhood I spent wanting learn actionscript and make my own flash game. I learned enough to make of of those "dont let your mouse touch the wall" type games, but never anything serious.
                    <br/><br/>
                    So after spending a (notably enjoyable) year as a microbiology major in college, I turned to look at other majors for a variety of reasons, and found myself once again enchanted with the idea that I could make things if I had a CS degree. 
                    I have never looked back on the decision and making things has been what I have loved doing ever since! 
                    As an avid Runescape player in my early days I could type incredibly fast with two fingers, but feeling devoted to learning to code, I started to learn how to type correctly before fully swithcing my major (thank goodness). 
                    <br/><br/>
                    College was a blur of learning and experiences (one of the most memorable being winning my schools hackathon, SwampHacks 2015). 
                    Afterwards I went out into the workforce and I've been learning more and more ever since.
                    <br/><br/>
                    Whenever I am curious about something or need to implement something I will sink immense research into finding what, in that situation, the best solution to our problem. 
                    I am never done learning, and as a result, I have explored and implemented microservice architectures, cqrs event sourcing systems, and other really cool stuff!
                    <br/><br/>
                    <strong>Anyways, enough about me, enjoy the HTML5/Typescript game I built completely from scratch to fufill my childhood goals!<br/> <a href="https://github.com/JohnnyRacket/playmaker" target="_blank">https://github.com/JohnnyRacket/playmaker</a></strong>
                </div>
                <Game/>
            </div>
        </div>
    );
}