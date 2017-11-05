import React from "react"

import logo from '../App/logo.svg';

// .aboutMe-section {
// 	background: #F0B67F;
// 	text-align: center;
// 	padding: 50px;
// }
// @media (min-width: 320px) {
//
// }
// @media (min-width: 480px) {
//
// }
// @media (min-width: 600px) {
//
// }
// @media (min-width: 801px) {
//
// }
// @media (min-width: 1025px) {
//
// }
// @media (min-width: 1281px) {


const SideBarMenu = () => {
	const style = {
		sideBarMenuStyle: {
			width: '300px',
			paddingBottom: '2em',
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			overflowX: 'hidden',
			overflowY: 'auto',
			background: '#A8DFD9',
			zIndex: 200,
			display: 'block',
			verticalAlign: 'middle',
		},
		sidebarMenuHeader: {
			height: '80px',
			background: '#5C586A',
			icon: {
				float: 'left',
				width: '33%',
				paddingBottom: '20px'
			},
			headerText: {
				float: 'right',
				width: '66%',
				color: '#000000',
			}
		},
		sideBarFooter: {
			position: 'fixed',
			bottom: '0px',
			background: '#5C586A',
			width: '300px',
		}
	};
	return (
		<div className="sidebar-menu" style={style.sideBarMenuStyle}>
			<div className="sidebar-menu-header" style={style.sidebarMenuHeader}>
				<div style={style.sidebarMenuHeader.icon}>
					<img src={logo}
					     className="App-logo"
					     alt="logo"
					/>
				</div>
				<div style={style.sidebarMenuHeader.headerText}>
					<h1>LEANROB</h1>
				</div>
			</div>
			<br />
			<div className="sidebar-menu-content">
				<p>
					<a href="#aboutMe">About Rob</a>
				</p>
				<p>
					<a href="#contactInfo">Contact Information</a>
				</p>
				<p>
					<a href="#skills">Skill Sets</a>
				</p>
				<p>
					<a href="#startupAccelerator">Startup Accelerator</a>
				</p>
				<p>
					<a href="#hackathons">Hack-A-Thons</a>
				</p>
				<p>
					<a>Get In Touch</a>
				</p>
			</div>
			<div className="sidebar-menu-footer" style={style.sideBarFooter}>
				<p>@leanrob</p>
			</div>
		</div>
	)
};

export default SideBarMenu