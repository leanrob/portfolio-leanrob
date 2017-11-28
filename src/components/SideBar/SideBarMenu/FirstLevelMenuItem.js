import React from "react"
import PropTypes from 'prop-types'

const FirstLevelMenuItem = ({link}) => {
	return (
		<div className="first-level">
			<a href={link}>something</a>
		</div>
	)
};

FirstLevelMenuItem.propTypes = {
	// example: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

FirstLevelMenuItem.defaultProps = {
	link: "/#"
};

export default FirstLevelMenuItem