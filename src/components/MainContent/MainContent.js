import React from "react"
import PortfolioPage from '../PortfolioPage/PortfolioPage'

const MainContent = () => {
	const mainContentStyle = {
		marginLeft: '300px',
		background: '#fcfcfc',
		minHeight: '100%',
		display: 'block',
		boxSizing: 'border-box',
		marginTop: '50px'
	};
	return (
		<div className="main-content" style={mainContentStyle}>
			<PortfolioPage />
		</div>
	)
};

export default MainContent