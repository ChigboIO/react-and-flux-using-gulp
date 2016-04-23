var React = require('react');

var Home = React.createClass({
  render: function() {
    return(
      <div className='jumbotron'>
        <h3>Heading</h3>
        <p>This is a paragraph</p>
      </div>
    );
  }
});

module.exports = Home;
