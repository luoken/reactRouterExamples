// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

var React = require('react');
var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

const ParamsExample = () => (
  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li><Link to="/netflix">Netflix</Link></li>
        <li><Link to="/zillow-group">Zillow Group</Link></li>
        <li><Link to="/yahoo">Yahoo</Link></li>
        <li><Link to="/modus-create">Modus Create</Link></li>
      </ul>

      <Route path="/:id" component={Child}/>
    </div>
  </Router>
)

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

//export default ParamsExample
module.exports = ParamsExample;