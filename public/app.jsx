var GreeterMessage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
});


var GreeterForm = React.createClass({
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name"/>
                </div>
                <div>
                    <textarea ref="message" rows="10" cols="30"></textarea>
                </div>
                <div>
                    <button>Press Me</button>
                </div>
            </form>
        );
    },
    onFormSubmit: function(e) {
        e.preventDefault();

        const nameRef = this.refs.name;
        const name = nameRef.value;

        const messageRef = this.refs.message;
        const message = messageRef.value;

        var updates = {};
        if (typeof name ==='string' && name.length > 0) {
            updates.name = name;
            nameRef.value = '';
        }

        if (typeof message === 'string' && message.length > 0) {
            updates.message = message;
            messageRef.value = '';
        }

        this.props.onNewFormData(updates);
    }
});


var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: "React",
            message: "This is from the component"
        };
    },
    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewFormData: function(updates) {
        this.setState(updates);
    },
    render: function(){

        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewFormData={this.handleNewFormData}/>
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter name="Graeme"/>,
    document.getElementById("app")
);
