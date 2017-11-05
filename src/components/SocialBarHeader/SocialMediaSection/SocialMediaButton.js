import React from "react"

const SocialMediaButton = ({ content }) => {
	const style = {
		socialMediaButton: {
			transition: '.1s ease',
			background: 'rgba(255,255,255,.3)',
			color: '#f3f3f3',
			lineHeight: '30px',
			marginRight: '8px',
			minWidth: '30px',
			padding: 0,
			userSelect: 'none',
		}
	};
	return (
		<div className="socialMediaButton-header" style={style.socialMediaButton}>
			{ content }
			<p>RB</p>
		</div>
	)
};

export default SocialMediaButton