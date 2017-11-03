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
		overflowY: 'hidden',
		background: '#343131',
		zIndex: 200,
		display: 'block',
		verticalAlign: 'middle',
	};
	return (
		<div className="sidebar-menu" style={sideBarMenuStyle}>
                    <span>
                        <div style={{float: 'left', width: '25%',}}>
                            <img src={logo}
                                 className="App-logo"
                                 alt="logo"
                            />
                        </div>
                        <div style={{float: 'right', width: '72%', color: '#41B883',}}>
                            <h1>LEANROB</h1>
                        </div>
                    </span>

		</div>
	)
};

export default SideBarMenu