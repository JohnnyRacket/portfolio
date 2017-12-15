import React, { Component } from 'react';
import './Contact.css';

export default function Contact(props) {
    return (
        <div className="contact">
            <div className="title"> Make Contact </div>
            <div className="content">
                <div className="description">
                    If you are interested in talking to me, hiring me, or anything, reach out at any of the links at the bottom, email is probably best though. 
                    I am happy to talk about anything! Here are things I am interested in/know about:
                </div>
                <div className="list">Interests</div> - System Architecture, Game Development, Front end Design, System Design/OOP
                <div className="list">Skills</div>
                <div className="list">Languages and Tools</div> 
            </div>
        </div>
    );
}