import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

import './aboutMeSection.css'

const AboutMeSection = () => {
	return (
		<div className="aboutMe-content" id="aboutMe">
			<h2 className="about-me-header">About Me Section</h2>
			<blockquote>
				<p>I make cool shit. </p>
				<br />
				<small>AKA: I build products to solve problems big enought hat customers pay to have them solved</small>
				<br />
				<small>(But that doesn't sound as awesome)</small>
			</blockquote>
			<p>From the first moment I realized I could literally spin keystrokes into real things I was hooked.</p>
			<p>Currently I work designing, crafting, testing, and deploying many different types of eCommerce products in many different languages.</p>
			<p>I am a consistently evolving and learning to be a better person. Meditation and mindfulness is an important part of life. Meditating shorty at Piazzale Michelangelo in Florence was a life altering moment in a very positive way.</p>
			<p>I’m Canadian but I have loved many different areas of the world and will never allow invisible borders to block me from life opportunities.</p>
		</div>
	)
};


export default AboutMeSection