import React from "react"

const FooterSection = () => {
	return (
		<div className="footer-container">
			<span className="footer-info">Some Stuff</span>
			<span className="footer-nav-section">Links</span>
			<span className="footer-social-section">Social</span>
		</div>
	)
};

FooterSection.propTypes = {
	// example: PropTypes.string.isRequired,
};

FooterSection.defaultProps = {

};

export default FooterSection