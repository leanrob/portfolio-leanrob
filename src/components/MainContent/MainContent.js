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
			<h1>Rob Byrne</h1>
			<h2>Software Developer. I get shit done</h2>
		</div>
	)
};

export default MainContent