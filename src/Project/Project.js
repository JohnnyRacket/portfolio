import React, { Component } from 'react';
import './Project.css';
import placeholder from '../History/florida.png'

export default function Project (props){
    return (
        <div className="project">
            <div className="project-title"> {props.title} </div>
            <div className="project-preview">
                <img src={props.image} className="project-preview-img" />
                <div className="project-preview-description"> {props.body} </div>
            </div>
        </div>
    );
}