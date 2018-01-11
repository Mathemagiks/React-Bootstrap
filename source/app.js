import React from 'react';
import Button from './bootstrap/button';

export default class App extends React.Component{
	render(){
		return <div className="jumbotron jumbotron-fluid text-md-center" style={{backgroundImage:'url(img/2s.jpg)',color:'white'}}>
			<div className="container">
				<h1>Building React.js User Interfaces</h1>
				<p>with Bootstrap and SASS.</p>
				<p><Button className=" -dark" href="http://www.sharondesmond.com" target="_blank"/>
				   <Button className=" -outline-light -lg -block" disabled/></p>
			</div>
		</div>;

	}

}