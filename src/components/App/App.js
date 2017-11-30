import React, { Component } from 'react';
import Media from 'react-media'
import FaBars from 'react-icons/lib/fa/bars'

import './App.css';

import SideBarMenu from '../SideBar/SideBarMenu/SideBarMenu'
import MainContent from '../MainContent/MainContent'
import SocialBarHeader from '../SocialBarHeader/SocialBarHeader'

class App extends Component {

	burgerToggle = () => {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

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
						<div>
							<nav>
								<div className="navNarrow">
									<i className="" onClick={this.burgerToggle}><FaBars size={22} /></i>
									<div className="narrowLinks">
										<a href="#aboutMe" onClick={this.burgerToggle}>About Me</a>
										<a href="#contactInfo" onClick={this.burgerToggle}>Contact Info</a>
										<a href="#skills" onClick={this.burgerToggle}>Skills</a>
										<a href="#startupAccelerator" onClick={this.burgerToggle}>Startup Accelerator</a>
										<a href="#hackathons" onClick={this.burgerToggle}>Hack-A-Thons</a>
									</div>
								</div>
							</nav>
							<div>
								<SocialBarHeader/>
								<MainContent />
							</div>
						</div>
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
