import React from "react"
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o'

import "./headingSection.css"

import headingGif from "../../../assets/images/heading-gif.gif"

const HeadingSection = () => {
	return (
		<div className="heading-section" id="heading">
			<div>
				<div>
					<img className="heading-image" src={headingGif} alt=""/>
					<div className="heading-title-section">
						<h1 className="heading-title">Robert Byrne</h1>
						<h3 className="subheading-title">Software Developer & Entrepreneur (The Docs)</h3>
					</div>
				</div>
			</div>
			<div className="heading-content">
				<p>Rob is a Canadian guy who build software and grows startups.</p>
				<p>If you are reading this then you have found some interest in Rob Byrne the software developer and entrepreneur. If that is so then you may find this documentation useful.</p>
				<p>This documentation set is all about Rob. It is structured in this manner because, like software documentation, Rob is constantly and evolving and changing.</p>
				<p>In this you will find things like…</p>
				<ul>
					<li><FaCheckSquareO/> Change logs: Evolutions of Rob over time</li>
					<li><FaCheckSquareO/> Major Releases: Jobs and Companies Rob has built software for or created</li>
					<li><FaCheckSquareO/> Integrations: The skills Rob has integrated into his work life</li>
					<li><FaCheckSquareO/> Issue Reporting: A way to get in touch with Rob</li>
					<li><FaCheckSquareO/> Past Uses: Accelerators Rob has been involved with</li>
					<li><FaCheckSquareO/> Hack-a-thons: Some of the Hack-a-thons Rob has won and competed in</li>
				</ul>
			</div>
		</div>
	)
};

export default HeadingSection