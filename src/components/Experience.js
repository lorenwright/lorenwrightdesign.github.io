import React, { Component } from 'react';
var data = require('../controllers/Data.json');

class Experience extends React.Component {
    render() {
        return (
            <div className="jobs">
                <div className="container">
                    <h2>Experience.</h2>
                    <div className="job-container">
                        <div className="job-line"></div>
                        {data.experience.map((experience, key) =>
                            <div className="job" key={key}>
                                <div className="job-content">
                                    <img src={'/images/' + experience.logo} />
                                    <div className="position">{experience.position}</div>
                                    <a href={'http://' + experience.website}>{experience.company}</a>
                                    <div className="time">{experience.start} - {experience.end}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
};

module.exports = Experience;
