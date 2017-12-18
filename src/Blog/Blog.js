import React, { Component } from 'react';
import './Blog.css';
import BlogPreview from '../BlogPreview/BlogPreview';

export default function Blog (props){
    let posts = props.posts.map(function(post, index) {
        return (
          <BlogPreview key={post.id} id={post.id} title={post.title} date={post.date} body={post.body} />
        );
      });
    return (
        <div className="blog">
            <div className="title"> The Blog </div>
            <div className="content">
                {posts}
            </div>
        </div>
    );
}