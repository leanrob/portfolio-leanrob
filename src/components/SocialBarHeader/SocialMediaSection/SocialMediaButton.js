import React from "react"
import PropTypes from 'prop-types'

import './socialMediaButton.css'

const SocialMediaButton = ({ content, link }) => {
	const style = {
		socialMediaButton: {
			float: 'left',
			position: 'relative',
			height: '30px',
			transition: '.1s ease',
			background: 'rgba(255,255,255,.3)',
			color: '#f3f3f3',
			lineHeight: '30px',
			marginRight: '8px',
			minWidth: '30px',
			padding: 0,
			userSelect: 'none',
			borderRadius: '10%',
		},
		buttonContent: {
			color: '#fff',
			textDecoration: 'none',
			fontSize: '1pc',
			lineHeight: '30px',
			position: 'absolute',
			top: 0,
			left: 0,
			display: 'inline-block',
			fontStyle: 'normal',
			fontWeight: 400,
			textAlign: 'center',
			width: '30px',
			webkitFontSmoothing: 'antialiased',
		}
	};
	return (
		<a className="socialMediaButton" href={link} target="_blank">

			<span className="buttonContent">
				{ content }
			</span>
		</a>
	)
};

SocialMediaButton.propTypes = {
	content: PropTypes.any.isRequired,
	// link: PropTypes.string.isRequired,
};
// SocialMediaButton.defaultProps = {
// };

export default SocialMediaButton