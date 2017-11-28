import React from "react"
import PortfolioPage from '../PortfolioPage/PortfolioPage'
import Media from 'react-media'

import './mainContent.css'

const MainContent = () => {
	const mainContentStyle = {
		marginLeft: '300px',
		background: '#fcfcfc',
		minHeight: '100%',
		display: 'block',
		boxSizing: 'border-box',
		marginTop: '50px'
	};
	const mobileMainContentStyle = {
		background: '#fcfcfc',
		minHeight: '100%',
		display: 'block',
		boxSizing: 'border-box',
		marginTop: '50px'
	};
	return (
		<Media query="(min-width: 768px)">
			{matches => matches ? (
				<div className="main-content" style={mainContentStyle}>
					<PortfolioPage />
				</div>
			) : (
				<div className="main-content" style={mobileMainContentStyle}>
					<PortfolioPage />
				</div>
			)}

		</Media>
	)
};

export default MainContent