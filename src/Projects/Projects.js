import React, { Component } from 'react';
import './Projects.css';
import placeholder from '../History/florida.png'
import Project from '../Project/Project'

export default function Projects (props){
    let projects = props.projects.map(function(project, index) {
        return (
          <Project key={index} title={project.title} image={project.image} body={project.body} link={project.link} />
        );
      });
    return (
        <div className="projects">
            <div className="title"> My Projects </div>
            <div className="content">
                {projects}
            </div>
        </div>
    );
}