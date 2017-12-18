import React, { Component } from 'react';
import './BlogPreview.css';

export default function BlogPreview (props){
    return (
        <div className="blog-preview">
            <div className="blog-preview-title"> {props.title} </div>
            <div className="blog-preview-date">{props.date}</div>
        </div>
    );
}