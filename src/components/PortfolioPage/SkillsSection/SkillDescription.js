import React from "react"
import PropTypes from 'prop-types'

const MainPoints = ({mainPoints}) => {
	let points = [];
	mainPoints.forEach(function(value) {
		points.push(<li>{value}</li>)
	});
	return points;
};

const SkillDescription = ({title, description, mainPoints, usedIn}) => {
	return (
		<div>
			<h2 className="skill-heading">{title}</h2>
			<p className="skill-description">{description}</p>
			<ul>
				<MainPoints mainPoints={mainPoints}/>
			</ul>
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