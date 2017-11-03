import React from "react"

const MainContent = () => {
	const mainContentStyle = {
		marginLeft: '300px',
		background: '#fcfcfc',
		minHeight: '100%',
		display: 'block',
		boxSizing: 'border-box',
	};
	return (
		<div className="main-content" style={mainContentStyle}>
			<h1>This is where the content will live</h1>
		</div>
	)
};

export default MainContent