import React from "react"
import FaBeer from 'react-icons/lib/fa/beer'
import FaGithub from 'react-icons/lib/fa/github'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaLinkedin from 'react-icons/lib/fa/linkedin'

import SocialMediaButton from './SocialMediaButton'

const SocialMediaHeader = () => {
	const style = {
		socialMediaSection: {
			position: 'absolute',
			top: '5px',
			right: '0',
		}
	};
	return (
		<div className="socialMediaSection-header" style={style.socialMediaSection}>
			<SocialMediaButton content={<FaGithub size={22} />} link={"https://github.com/leanrob"}/>
			<SocialMediaButton content={<FaTwitter size={22} />} link={"https://twitter.com/lean_rob"}/>
			<SocialMediaButton content={<FaLinkedin size={22} />} link={"https://www.linkedin.com/in/leanrob/"}/>
		</div>
	)
};

export default SocialMediaHeader