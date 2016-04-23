var React = require('react');

var About = React.createClass({
  render: function() {
    return(
      <div>
        <h3>About</h3>
        <ul>
          <li>Company Overview</li>
          <li>Who we are</li>
          <li>What we do</li>
          <li>Where we are</li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
