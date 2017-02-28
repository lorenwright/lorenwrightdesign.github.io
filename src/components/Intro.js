import React, { Component } from 'react';
import logo from '../images/Logo.png';
var data = require('../controllers/Data.json');

class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <div className="intro-container container">
                    <h1>{data.intro} <span>{data.name}</span>.</h1>
                    <h2>{data.position}</h2>
                    <p>{data.body}</p>
                </div>
                <img src={logo} className="logo" />
            </div>
        );
    }
}

module.exports = Intro;
