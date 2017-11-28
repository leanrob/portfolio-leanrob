import React from "react"
import FaArrowDown from 'react-icons/lib/fa/arrow-down'

import "./headingSection.css"

const HeadingSection = () => {
	return (
		<div className="heading-section" id="heading">
			<div className="heading-content">
				<h1>Robert Byrne</h1>
				<h5>Software Developer, Entrepreneur, Constantly Improving Human</h5>
				<p><a href="https://twitter.com/lean_rob">Twitter: @lean_rob</a></p>
				<p><a href="https://github.com/leanrob">Github: @lean_rob</a></p>
				<p><a href="#aboutMe"><FaArrowDown size={22} /></a></p>
			</div>
		</div>
	)
};

export default HeadingSection