import React, { Component } from 'react';
import './css/style.css';
import './css/font-awesome.min.css';
var Header = require('./components/Header');
var Intro = require('./components/Intro');
var Tech = require('./components/Technologies');
var Experience = require('./components/Experience')
var Footer = require('./components/Footer');

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Intro />
                <Tech />
                <Experience />
                <Footer />
            </div>
        );
    }
}

export default App;
