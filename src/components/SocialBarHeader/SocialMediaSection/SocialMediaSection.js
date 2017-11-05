import React from "react"

import SocialMediaButton from './SocialMediaButton'

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

const TwitterButtonContent = () => {
	
};


const SocialMediaHeader = () => {
	const style = {
		socialMediaSection: {
			position: 'absolute',
			top: '5px',
			right: '0',
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
		<div className="socialMediaSection-header" style={style.socialMediaSection}>
			<SocialMediaButton/>
		</div>
	)
};

export default SocialMediaHeader