import React from "react"
import PropTypes from 'prop-types';

import reactlogo from "../../../assets/images/react-redux.jpeg"

const MainPoints = ({mainPoints}) => {
	let points = [];
	for (let index = 0; index < mainPoints.length; index++) {
		points.push(<li><span>{index}.</span><p>{mainPoints[index]}</p></li>)
	}
	return points;
};

const SkillDescription = ({title, description, mainPoints, usedIn}) => {
	return (
		<div className="skill">
			<img className="skill-image" src={reactlogo} alt="React" />
			<h3 className="skill-heading">{title}</h3>
			<p className="skill-description">{description}</p>
			<ol>
				<MainPoints mainPoints={mainPoints}/>
			</ol>
			<p className="skill-usedIn">{usedIn}</p>
		</div>
	)
};

SkillDescription.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	mainPoints: PropTypes.object,
	usedIn: PropTypes.string.isRequired,
};

SkillDescription.defaultProps = {

};

export default SkillDescription