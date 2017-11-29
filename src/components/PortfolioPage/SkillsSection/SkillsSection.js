import React from "react"

import SkillDescription from "./SkillDescription"

import SkillsData from "./Data-SkillsSection.json"
import './skillsSection.css'

// Logos
import reactlogo from "../../../assets/images/react-redux.jpeg"
import eventstorelogo from "../../../assets/images/eventstore-logo.png"
import golanglogo from "../../../assets/images/golang-pirate-boat.png"
import javascriptlogo from "../../../assets/images/javascript-logo.png"
import nodelogo from "../../../assets/images/node-logo.png"
import angularlogo from "../../../assets/images/angular-logo.png"

const SkillsSection = () => {
	return (
		<div className="main-content" id="skills">
			<h1 className="integrations-header">Integrations</h1>
			<SkillDescription title={SkillsData.javascript.title}
			                  description={SkillsData.javascript.description}
			                  usedIn={SkillsData.javascript.usedIn}
			                  mainPoints={SkillsData.javascript.mainPoints}
			                  logo={javascriptlogo}
			                  id={SkillsData.javascript.id}
			                  link={SkillsData.javascript.link}
			/>
			<SkillDescription title={SkillsData.react.title}
			                  description={SkillsData.react.description}
			                  usedIn={SkillsData.react.usedIn}
			                  mainPoints={SkillsData.react.mainPoints}
			                  logo={reactlogo}
			                  id={SkillsData.react.id}
			                  link={SkillsData.react.link}
			/>
			<SkillDescription title={SkillsData.golang.title}
			                  description={SkillsData.golang.description}
			                  usedIn={SkillsData.golang.usedIn}
			                  mainPoints={SkillsData.golang.mainPoints}
			                  logo={golanglogo}
			                  id={SkillsData.golang.id}
			                  link={SkillsData.golang.link}
			/>
			<SkillDescription title={SkillsData.cqrs.title}
			                  description={SkillsData.cqrs.description}
			                  usedIn={SkillsData.cqrs.usedIn}
			                  mainPoints={SkillsData.cqrs.mainPoints}
			                  logo={eventstorelogo}
			                  id={SkillsData.cqrs.id}
			                  link={SkillsData.cqrs.link}
			/>
			<SkillDescription title={SkillsData.node.title}
			                  description={SkillsData.node.description}
			                  usedIn={SkillsData.node.usedIn}
			                  mainPoints={SkillsData.node.mainPoints}
			                  logo={nodelogo}
			                  id={SkillsData.node.id}
			                  link={SkillsData.node.link}
			/>
			<SkillDescription title={SkillsData.angular.title}
			                  description={SkillsData.angular.description}
			                  usedIn={SkillsData.angular.usedIn}
			                  mainPoints={SkillsData.angular.mainPoints}
			                  logo={angularlogo}
			                  id={SkillsData.angular.id}
			                  link={SkillsData.angular.link}
			/>
			<SkillDescription title={SkillsData.others.title}
			                  description={SkillsData.others.description}
			                  usedIn={SkillsData.others.usedIn}
			                  mainPoints={SkillsData.others.mainPoints}
			                  id={SkillsData.others.id}
			/>
		</div>
	)
};

export default SkillsSection