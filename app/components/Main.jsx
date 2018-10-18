const React = require('react');

const Nav = require('Nav');
const Weather = require('Weather');

var Main = (props) => {
    let yellowStyle = {
        backgroundColor: "yellow"
    };
    let lavenderStyle = {
        backgroundColor: "lavender"
    };
    return (
        <div>
        <div style={yellowStyle}>
            <Nav/>
        </div>
        <div style={lavenderStyle}>
            {props.children}
        </div>
        </div>
    );
};

module.exports = Main;
