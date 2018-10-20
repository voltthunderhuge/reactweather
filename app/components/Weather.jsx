const React = require("react");
const LocationForm = require("LocationForm");
const WeatherMessage = require("WeatherMessage");
const OpenWeatherMap = require("OpenWeatherMap");

var Weather = React.createClass({
    render: function() {
        const {location, temperature, isLoading} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (location && temperature) {
                return <WeatherMessage location={location} temperature={temperature}/>;
            }
        }
        return (
            <div>
            <h1 className="text-center">Get Weather</h1>
            <LocationForm onNewFormData={this.handleNewFormData}/>
            {renderMessage()}

            </div>
        );
    },
    handleNewFormData: function(location) {
        const self = this;

        self.setState({isLoading: true});

        OpenWeatherMap.getTemperature(location).then(function(temperature) {
            self.setState({location: location, temperature: temperature, isLoading: false});

        },function(error) {
            self.setState({isLoading: false});
            alert(error)
        });
    },
    getInitialState: function() {
        return {
            isLoading: false
        };
    }
});

module.exports = Weather;
