import React, { Component } from 'react';
import './App.css';

import SideBarMenu from './components/SideBar/SideBarMenu'
import MainContent from './components/MainContent/MainContent'

class App extends Component {
	render() {
		return (
            <div className="App">
                <SideBarMenu />
                <MainContent />
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
