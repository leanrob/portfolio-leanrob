import React from "react"

import SocialMediaSection from './SocialMediaSection/SocialMediaSection'

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


const SocialBarHeader = () => {
	const style = {
		socialBarHeader: {
			background: 'rgba(0,0,0,.15)',
			overflow: 'hidden',
			padding: '5px 8px',
			zIndex: '10',
			boxShadow: '0 1px 1px rgba(0,0,0,.1)',
			position: 'relative',
			height: '30px',
		}
		// sideBarMenuStyle: {
		// 	width: '300px',
		// 	paddingBottom: '2em',
		// 	position: 'fixed',
		// 	top: 0,
		// 	bottom: 0,
		// 	left: 0,
		// 	overflowX: 'hidden',
		// 	overflowY: 'auto',
		// 	background: '#A8DFD9',
		// 	zIndex: 200,
		// 	display: 'block',
		// 	verticalAlign: 'middle',
		// },
		// sidebarMenuHeader: {
		// 	height: '80px',
		// 	background: '#5C586A',
		// 	icon: {
		// 		float: 'left',
		// 		width: '33%',
		// 		paddingBottom: '20px'
		// 	},
		// 	headerText: {
		// 		float: 'right',
		// 		width: '66%',
		// 		color: '#000000',
		// 	}
		// },
		// sideBarFooter: {
		// 	position: 'fixed',
		// 	bottom: '0px',
		// 	background: '#5C586A',
		// 	width: '300px',
		// }
	};
	return (
		<div className="socialBar-header" style={style.socialBarHeader}>
			<SocialMediaSection />
			<p>Something></p>
		</div>
	)
};

export default SocialBarHeader