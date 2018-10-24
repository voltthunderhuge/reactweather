const React = require("react");
const LocationForm = require("LocationForm");
const WeatherMessage = require("WeatherMessage");
const OpenWeatherMap = require("OpenWeatherMap");
const ErrorModal = require("ErrorModal");

var Weather = React.createClass({
    render: function() {
        const {location, temperature, isLoading, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (location && temperature) {
                return <WeatherMessage location={location} temperature={temperature}/>;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <LocationForm onNewFormData={this.handleNewFormData}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    },
    handleNewFormData: function(location) {
        const self = this;

        self.setState({
            isLoading: true,
            errorMessage: undefined
        });

        OpenWeatherMap.getTemperature(location).then(function(temperature) {
            self.setState({location: location, temperature: temperature, isLoading: false});

        },function(error) {
            self.setState({
                isLoading: false,
                errorMessage: error.message
            });
        });
    },
    getInitialState: function() {
        return {
            isLoading: false

        };
    }
});

module.exports = Weather;
