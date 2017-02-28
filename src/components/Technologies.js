import React, { Component } from 'react';
var data = require('../controllers/Data.json');

class Tech extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const development = data.technologies.filter((t) => {
            if(t.type === 'development')
                return true;
        });

        const design = data.technologies.filter((t) => {
            if(t.type === 'design')
                return true;
        });

        const tools = data.technologies.filter((t) => {
            if(t.type === 'tools')
                return true;
        });

        const languages = data.technologies.filter((t) => {
            if(t.type === 'languages')
                return true;
        });


        return (
            <div className="skills clearfix">
                <div className="container">
                    <h2 className="clearfix">Skillz.</h2>
                    <div className="tech-container">
                        <div className="third">
                            <h3><i className="fa fa-gears"></i>Development</h3>
                            <ul className="development">
                                {development.map((development, key) => <li key={key}>{development.tech}</li>)}
                            </ul>
                        </div>
                        <div className="two-thirds">
                            <h3><i className="fa fa-object-group"></i>Design</h3>
                            <ul className="design">
                                {design.map((design, key) => <li key={key}><img src={'/app/images/' + design.icon} /></li>)}
                            </ul>
                            <div className="half">
                                <h3><i className="fa fa-lightbulb-o"></i>Languages</h3>
                                <ul className="languages">
                                    {languages.map((languages, key) => <li key={key}><i className="fa fa-check"></i>{languages.tech}</li>)}
                                </ul>
                            </div>
                            <div className="half">
                                <h3><i className="fa fa-terminal"></i>Tools</h3>
                                <ul className="tools">
                                    {tools.map((tools, key) => <li key={key}><i className="fa fa-check"></i>{tools.tech}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

module.exports = Tech;
