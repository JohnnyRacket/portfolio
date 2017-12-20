import React, { Component } from 'react';
import './BlogPreview.css';
import { Link } from 'react-router-dom';

export default function BlogPreview (props){
    return (
        <Link to={'/blog/post/' + props.id} className="blog-preview">
            <div className="blog-preview-date">
                <div className="blog-preview-date--day">12/18</div>
                <div className="blog-preview-date--year">2017</div>
            </div>
            <div className="blog-preview-content"> 
                <div className="blog-preview-content--title"> {props.title} </div>
                <div className="blog-preview-content--body"> {props.body.substring(0,250).replace(/<(?:.|\n)*?>/gm, '')} </div>
            </div>
        </Link>
    );
}