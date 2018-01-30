import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appsource.scss';

export default class App extends React.Component{
	render(){
		return <ReactCSSTransitionGroup transitionName="app" transitionAppear={true} transitionAppearTimeout={500}><Jumbotron className="-fluid text-sm-center custom" containerFluid={true}>
				<h1>Building React.js User Interfaces</h1>
				<p>with Bootstrap and SASS.</p>
				<p><Button className=" -danger" href="http://www.sharondesmond.com" target="_blank"/>
				   <Button className=" -outline-light -lg -block" disabled/></p>
		</Jumbotron></ReactCSSTransitionGroup>;

	}

}