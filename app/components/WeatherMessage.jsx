const React = require('react');

var WeatherMessage = React.createClass({
    render: function() {

    }
});

var WeatherMessage = ({location, temperature}) => {
    if (location.length > 0 && typeof temperature === 'number') {
        return (
            <div>
                <p>The weather for {location} is {temperature}</p>
            </div>
        );
    } else {
        return (<div></div>);
    }
}
module.exports = WeatherMessage;
