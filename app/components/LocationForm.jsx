const React = require('react');

var LocationForm = React.createClass({
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="location"/>
                </div>
                <div>
                    <button>Get Weather</button>
                </div>
            </form>
        );
    },
    onFormSubmit: function(e) {
        e.preventDefault();

        const locationValue = this.refs.location.value;
        if (typeof locationValue === 'string' && locationValue.length > 0) {
            // call parent component with result
            if (this.props.onNewFormData) {
                this.props.onNewFormData(locationValue);
            }
        }

        this.refs.location.value = "";
    }
});

module.exports = LocationForm;
