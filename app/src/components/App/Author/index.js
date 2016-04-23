"use strict";

var React = require('react');
var AuthorApi = require('../../../api/authorApi');
var AuthorTable = require('./AuthorTable');

var Author = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    };
  },

  componentDidMount: function() {
    if (this.isMounted()) {
      this.setState({
        authors: AuthorApi.getAllAuthors()
      });
    }
  },

  authorRecords: function() {
    return this.state.authors.map(function(author) {
      return(
        <tr key={author.id}>
          <td><a href={ "#/authors/" + author.id }>{ author.id }</a></td>
          <td>{ author.firstName } { author.firstName }</td>
        </tr>
      );
    });
  },

  render: function() {
    return(
      <div>
        <h3>Authors</h3>
        <AuthorTable authors={ this.state.authors } />
      </div>
    );
  }
});

module.exports = Author;
