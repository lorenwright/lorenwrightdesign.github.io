import React, { Component } from 'react';
var data = require('../controllers/Data.json');

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li><a href={'http://twitter.com/' + data.social.twitter}><i className="fa fa-twitter"></i></a></li>
                            <li><a href={'http://github.com/' + data.social.github}><i className="fa fa-github"></i></a></li>
                            <li><a href={'http://linkedin.com/' + data.social.linkedin}><i className="fa fa-linkedin"></i></a></li>
                            <li><a href={'http://facebook.com/' + data.social.facebook}><i className="fa fa-facebook"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

module.exports = Header;
