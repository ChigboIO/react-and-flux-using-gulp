"use strict";

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var App = require('../components/App');
var Home = require('../components/App/Home');
var About = require('../components/App/About');
var Author = require('../components/App/Author');

var routes = (
  <Route name='app' path='/' handler={ App }>
    <DefaultRoute handler={ Home } />
    <Route name='about' handler={ About } />
    <Route name='authors' handler={ Author } />
  </Route>
);

module.export = routes;
