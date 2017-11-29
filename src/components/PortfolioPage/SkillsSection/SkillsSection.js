import React from "react"

import SkillDescription from "./SkillDescription"

import './skillsSection.css'

const SkillsSection = () => {
	return (
		<div className="main-content" id="skills">
			<SkillDescription title={"Javascript"} description={"Javascript is awesome."} usedIn={"POS systems"}/>
		</div>
	)
};

export default SkillsSection