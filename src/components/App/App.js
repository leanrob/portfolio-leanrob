import React, { Component } from 'react';
import Media from 'react-media'

import './App.css';

import SideBarMenu from '../SideBar/SideBarMenu'
import MainContent from '../MainContent/MainContent'
import SocialBarHeader from '../SocialBarHeader/SocialBarHeader'

class App extends Component {
	render() {
		return (
            <div className="App">
	            <Media query="(min-width: 768px)">
		            {matches => matches ? (
		            	<div>
				            <SocialBarHeader/>
				            <SideBarMenu />
				            <MainContent />
			            </div>
		            ) : (
			            <p>The document is at least 600px wide.</p>
		            )}

	            </Media>
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    {/*<h1 className="App-title">Welcome to React</h1>*/}
                {/*</header>*/}
                {/*<p className="App-intro">*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
            </div>
		);
	}
}

export default App;
