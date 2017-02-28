import React, { Component } from 'react';
var data = require('../controllers/Data.json');

class Footer extends React.Component {
    render() {
        return (
            <footer className="container">
            <ul>
                <li><a href={'http://twitter.com/' + data.social.twitter}><i className="fa fa-twitter"></i></a></li>
                <li><a href={'http://github.com/' + data.social.github}><i className="fa fa-github"></i></a></li>
                <li><a href={'http://linkedin.com/' + data.social.linkedin}><i className="fa fa-linkedin"></i></a></li>
                <li><a href={'http://facebook.com/' + data.social.facebook}><i className="fa fa-facebook"></i></a></li>
            </ul>
                &copy; Loren Wright
            </footer>
        );
    }
}

module.exports = Footer;
