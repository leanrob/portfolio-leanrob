import React from "react"

import logo from '../../logo.svg';

const SideBarMenu = () => {
	const sideBarMenuStyle = {
		width: '300px',
		paddingBottom: '2em',
		position: 'fixed',
		top: 0,
		bottom: 0,
		left: 0,
		overflowX: 'hidden',
		overflowY: 'auto',
		background: '#343131',
		zIndex: 200,
		display: 'block',
		verticalAlign: 'middle',

	};
	return (
		<div className="sidebar-menu" style={sideBarMenuStyle}>
			<div className="sidebar-menu-header" style={{height: '80px', background: '#41B883'}}>
				<div style={{float: 'left', width: '33%', paddingBottom: '20px'}}>
					<img src={logo}
					     className="App-logo"
					     alt="logo"
					/>
				</div>
				<div style={{float: 'right', width: '66%', color: '#000000',}}>
					<h1>LEANROB</h1>
				</div>
			</div>
			<br />
			<div className="sidebar-menu-content">
				<p>About Rob</p>
				<p>Contact Information</p>
				<p>Skill Sets</p>
				<p>Startup Accelerator</p>
				<p>Hack-A-Thons</p>
				<p>Get In Touch</p>
			</div>
			<div className="sidebar-menu-footer" style={{position: 'fixed', bottom: '0px', background: '#41B883', width: '300px',}}>
				<p>@leanrob</p>
			</div>
		</div>
	)
};

export default SideBarMenu