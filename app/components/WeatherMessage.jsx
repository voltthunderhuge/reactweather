const React = require('react');

var WeatherMessage = React.createClass({
    render: function() {

    }
});

var WeatherMessage = ({location, temperature}) => {
    if (location.length > 0 && typeof temperature === 'number') {
        return (
            <div>
                <h3 className="text-center">The weather for {location} is {temperature}</h3>
            </div>
        );
    } else {
        return (<div></div>);
    }
}
module.exports = WeatherMessage;
