import React, { Component } from 'react';
import './Projects.css';
import placeholder from '../History/florida.png'

export default function Projects (props){
    return (
        <div className="projects">
            <div className="title"> My Projects </div>
            <div className="content">

                <div className="project">
                    <div className="project-title">Project Title</div>
                    <div className="project-preview">
                        <img src={placeholder} className="project-preview-img" />
                        <div className="project-preview-description">
                            I worked on creating my own HTML5/Typescript game engine from scratch.                             I worked on creating my own HTML5/Typescript game engine from scratch.
                            I worked on creating my own HTML5/Typescript game engine from scratch.
                            I worked on creating my own HTML5/Typescript game engine from scratch.
                            I worked on creating my own HTML5/Typescript game engine from scratch.
<br/>
I worked on creating my own HTML5/Typescript game engine from scratch.
I worked on creating my own HTML5/Typescript game engine from scratch.
<br/><br/>
I worked on creating my own HTML5/Typescript game engine from scratch.

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}