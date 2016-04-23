"use strict";

var React = require('react');

var AuthorTable = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  authorRows: function() {
    return this.props.authors.map(function(author) {
      return(
        <tr key={author.id}>
          <td><a href={"#/authors/" + author.id }>{ author.id }</a></td>
          <td>{author.firstName} {author.firstName}</td>
        </tr>
      );
    });
  },

  render: function() {
    return(
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            { this.authorRows() }
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorTable;
