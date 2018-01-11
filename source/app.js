import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';

export default class App extends React.Component{
	render(){
		return <Jumbotron className="-fluid text-md-center" style={{backgroundImage:'url(img/2s.jpg)',color:'white'}}>
				<h1>Building React.js User Interfaces</h1>
				<p>with Bootstrap and SASS.</p>
				<p><Button className=" -dark" href="http://www.sharondesmond.com" target="_blank"/>
				   <Button className=" -outline-light -lg -block" disabled/></p>
		</Jumbotron>;

	}

}