import React from 'react';
import ReactDOM from 'react-dom';

const component = <div className="jumbotron jumbotron-fulid text-md-center" style={{backgroundImage:'url(img/2s.jpg)',color:'white'}}>
			<div className="container">
				<h1>Building React.js User Interfaces</h1>
				<p>with Bootstrap and SASS.</p>
				<p><a className="btn btn-primary" href="http://www.sharondesmond.com" target="_blank">Discover things.</a></p>
			</div>
		</div>;

ReactDOM.render(component,document.getElementById('react'));