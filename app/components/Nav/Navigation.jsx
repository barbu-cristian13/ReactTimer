var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to='/countdown' activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
                Created by<a href="https://github.com/barbu-cristian13" target="_blank">John Christian Barbu</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
