import React from "react"

import robImage from "../../../assets/images/RobByrne.png"

import "./firstLevelMenuItem.css"

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
		<div className="rob-summary" id="rob-summary">
			<nav role="navigation">
				<img className="menu-image" align="center" src={robImage} />
				<h1 className="menu-main-heading">Rob Byrne</h1>
				<h4 className="menu-secondary-heading">Software Developer | Entrepreneur</h4>
				<hr className="menu-line-break" />
				<ul className="summary" id="summary">
					<li className="chapter">
						<a className="chapter-text" href="#aboutMe">Portfolio</a>
						<ul className="articles" id="articles">
							<li className="chapter"><a className="chapter-text" href="#contactInfo">Contact Info</a></li>
							<li className="chapter">
								<a className="chapter-text" href="#skills">Integrations</a>
								<ul className="articles">
									<li className="chapter"><a className="chapter-text" href="#javascript">Javascript</a></li>
									<li className="chapter"><a className="chapter-text" href="#react">ReactJS</a></li>
									<li className="chapter"><a className="chapter-text" href="#golang">Golang</a></li>
									<li className="chapter"><a className="chapter-text" href="#cqrs">CQRS/ES</a></li>
									<li className="chapter"><a className="chapter-text" href="#node">NodeJS</a></li>
									<li className="chapter"><a className="chapter-text" href="#angular">Angular</a></li>
									<li className="chapter"><a className="chapter-text" href="#others">Others</a></li>
								</ul>
							</li>
							<li className="chapter"><a className="chapter-text" href="#startupAccelerator">Startup Accelerator</a></li>
							<li className="chapter"><a className="chapter-text" href="#hackathons">Hackathons</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	)
};

export default SideBarMenu