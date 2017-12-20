import React, { Component } from 'react';
import './BlogPost.css';
import posts from '../Blog/posts.json';

export default function BlogPost (props){
    let post = posts.find((element) => {return element.id == props.match.params.id});
    return (
        <div className="blogpost">
            <div className="title"> {post.title}</div>
            <div className="body" dangerouslySetInnerHTML={{__html: post.body}}></div>
        </div>
    );
}