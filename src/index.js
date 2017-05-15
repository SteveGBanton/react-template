var React = require('react')
var ReactDOM = require('react-dom')
var Redux = require('redux')

import './stylesheets/style.scss'
const { Component } = React
const { render } = ReactDOM
const { combineReducers, createStore } = Redux

render(
	<div>
    <h1>Testing!</h1>
    </div>
,
	document.getElementById('react-container')
)
