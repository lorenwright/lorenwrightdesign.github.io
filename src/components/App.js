var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header');
var Intro = require('./Intro');
var Tech = require('./Technologies');
var Experience = require('./Experience')
var Footer = require('./Footer');

class App extends React.Component {
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

module.exports = App;
