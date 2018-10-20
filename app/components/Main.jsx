const React = require('react');

const Nav = require('Nav');
const Weather = require('Weather');

var Main = (props) => {
    let yellowStyle = {
        backgroundColor: "yellow"
    };
    let lavenderStyle = {
        backgroundColor: "lightseagreen"
    };
    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
