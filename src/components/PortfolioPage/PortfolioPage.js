import React from "react"

import HeadingSection from './HeadingSection/HeadingSection'
import AboutMeSection from './AboutMeSection/AboutMeSection'
import ContactInfoSection from './ContactInfoSection/ContactInfoSection'
import SkillsSection from './SkillsSection/SkillsSection'
import StartupAcceleratorSection from './StartupAcceleratorSection/StartupAcceleratorSection'
import HackathonSection from './HackathonsSection/HackathonSection'
import FooterSection from './FooterSection/FooterSection'

import './portfolioPage.css'

const PortfolioPage = () => {
	return (
		<div className="portfolio-page">
			<div className="page-inner">
				<HeadingSection />
				<AboutMeSection />
				<ContactInfoSection />
				<SkillsSection />
				<StartupAcceleratorSection />
				<HackathonSection />
				<FooterSection />
			</div>
		</div>
	)
};

export default PortfolioPage