import React from "react"
import Media from 'react-media'

import SocialMediaSection from './SocialMediaSection/SocialMediaSection'

const SocialBarHeader = () => {
	const style = {
		socialBarHeader: {
			background: 'rgba(40,40,40,.3)',
			overflow: 'hidden',
			padding: '5px 8px',
			zIndex: '10',
			boxShadow: '0 1px 1px rgba(0,0,0,.1)',
			position: 'fixed',
			top: 0,
			right: 0,
			width: '100%',
			height: '30px',
		}
	};

	const mobileStyle = {
		socialBarHeader: {
			background: 'rgba(40,40,40,.3)',
			overflow: 'hidden',
			padding: '5px 8px',
			zIndex: '10',
			boxShadow: '0 1px 1px rgba(0,0,0,.1)',
			position: 'fixed',
			bottom: 0,
			right: 0,
			width: '100%',
			height: '30px',
		}
	};

	return (
		<Media query="(min-width: 768px)">
			{matches => matches ? (
				<div className="socialBar-header" style={style.socialBarHeader}>
					<SocialMediaSection />
				</div>
			) : (
				<div className="socialBar-header" style={mobileStyle.socialBarHeader}>
					<SocialMediaSection />
				</div>
			)}

		</Media>
	)
};

export default SocialBarHeader