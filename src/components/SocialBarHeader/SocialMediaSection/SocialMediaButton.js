import React from "react"
import PropTypes from 'prop-types'

import './socialMediaButton.css'

const SocialMediaButton = ({ content, link, hoverTitle }) => {
	return (
		<a className="socialMediaButton" href={link} target="_blank">

			<span className="buttonContent" title={hoverTitle}>
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