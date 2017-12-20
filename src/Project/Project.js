import React, { Component } from 'react';
import './Project.css';
import placeholder from '../History/florida.png'

export default function Project (props){
    return (
        <div className="project">
            <div className="project-img-wrapper">
                <div style={{backgroundImage: 'url(' + props.image + ')'}} className="project-img"></div>
            </div>
            <div className="project-title-box">
                <div className="project-title"> {props.title} </div>
            </div>
            <div className="project-preview">
                <div className="project-preview-description"> {props.body} </div>
                <a href={props.link} target="_blank" className="project-link">{props.link}</a>
            </div>
        </div>
    );
}