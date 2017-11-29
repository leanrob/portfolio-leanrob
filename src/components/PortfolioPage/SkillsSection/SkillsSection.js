import React from "react"

import SkillDescription from "./SkillDescription"

import SkillsData from "./Data-SkillsSection.json"
import './skillsSection.css'

const SkillsSection = () => {
	return (
		<div className="main-content" id="skills">
			<SkillDescription title={SkillsData.javascript.title} description={SkillsData.javascript.description} usedIn={SkillsData.javascript.usedIn} mainPoints={SkillsData.javascript.mainPoints}/>
			<SkillDescription title={SkillsData.react.title} description={SkillsData.react.description} usedIn={SkillsData.react.usedIn} mainPoints={SkillsData.react.mainPoints}/>
			<SkillDescription title={SkillsData.golang.title} description={SkillsData.golang.description} usedIn={SkillsData.golang.usedIn} mainPoints={SkillsData.golang.mainPoints}/>
			<SkillDescription title={SkillsData.cqrs.title} description={SkillsData.cqrs.description} usedIn={SkillsData.cqrs.usedIn} mainPoints={SkillsData.cqrs.mainPoints}/>
			<SkillDescription title={SkillsData.node.title} description={SkillsData.node.description} usedIn={SkillsData.node.usedIn} mainPoints={SkillsData.node.mainPoints}/>
			<SkillDescription title={SkillsData.angular.title} description={SkillsData.angular.description} usedIn={SkillsData.angular.usedIn} mainPoints={SkillsData.angular.mainPoints}/>
			<SkillDescription title={SkillsData.others.title} description={SkillsData.others.description} usedIn={SkillsData.others.usedIn} mainPoints={SkillsData.others.mainPoints}/>
		</div>
	)
};

export default SkillsSection