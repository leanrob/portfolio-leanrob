import React from "react"
import PropTypes from 'prop-types';

const MainPoints = ({ mainPoints }) => {
	let points = [];
	for (let index = 0; index < mainPoints.length; index++) {
		points.push(<li><span>{index}.</span><p>{mainPoints[index]}</p></li>)
	}
	return points;
};

const SkillHeadingSection = ({ logo, title }) => {
	return (
		<div>
			<img className="skill-image" src={logo} alt="" />
			<h3 className="skill-heading">{title}</h3>
		</div>
	)
};

const DocsLinkSection = ({title, link}) => {
	if (!link) {
		return <div />
	}
	return (
		<p>See the {title} docs <a className="skill-docs" href={link} >here</a></p>
	)
}

const SkillDescription = ({ title, description, mainPoints, usedIn, logo, id, link }) => {
	return (
		<div className="skill" id={id}>
			<div className="skill-section-spacer" />
			<SkillHeadingSection logo={logo} title={title}/>
			<p className="skill-description">{description}</p>
			<ol>
				<MainPoints mainPoints={mainPoints}/>
			</ol>
			<p className="skill-usedIn">{usedIn}</p>
			<DocsLinkSection title={title} link={link}/>
		</div>
	)
};

SkillDescription.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	mainPoints: PropTypes.object,
	usedIn: PropTypes.string.isRequired,
	logo: PropTypes.string,
	link: PropTypes.string
};

SkillDescription.defaultProps = {

};

export default SkillDescription