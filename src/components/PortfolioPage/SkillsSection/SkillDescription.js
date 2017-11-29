import React from "react"
import PropTypes from 'prop-types'

const SkillDescription = ({title, description, mainPoints, usedIn}) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
			{mainPoints}
			<p>{usedIn}</p>
		</div>
	)
};

SkillDescription.propTypes = {
	// example: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	mainPoints: PropTypes.object,
	usedIn: PropTypes.string.isRequired,
};

SkillDescription.defaultProps = {

};

export default SkillDescription