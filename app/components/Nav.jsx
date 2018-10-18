const React = require("react");
const {Link, IndexLink} = require("react-Router");

var Nav = (props) => {
    return (
        <div>
            <h3>Navigation Component</h3>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        </div>
    );
}

module.exports = Nav;
