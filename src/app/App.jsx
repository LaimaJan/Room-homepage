// import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import MainContent from './components/MainContent/MainContent';
import DesktopHeroImage1 from './images/desktop-image-hero-1.jpg';
import DesktopHeroImage2 from './images/desktop-image-hero-2.jpg';
import DesktopHeroImage3 from './images/desktop-image-hero-3.jpg';
import MobileHeroImage1 from './images/mobile-image-hero-1.jpg';
import MobileHeroImage2 from './images/mobile-image-hero-2.jpg';
import MobileHeroImage3 from './images/mobile-image-hero-3.jpg';

import AboutDarkImg from './images/image-about-dark.jpg';
import AboutLightImg from './images/image-about-light.jpg';

function App() {
	const heroInfo = [
		{
			id: 1,
			img: DesktopHeroImage1,
			description:
				'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
		},
		{
			id: 2,
			img: DesktopHeroImage2,
			description:
				"With stores all ovet the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using out store locator. Any questions? Don't hesitate to contact us today.",
		},
		{
			id: 3,
			img: DesktopHeroImage3,
			description:
				'Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
		},
	];
	return (
		<>
			<div className="App">
				<Navigation />
				<MainContent />

				<section>
					<div className="additional-info">
						<div className="image-container">
							<img src={AboutDarkImg} alt="dark theme interior image" />
						</div>
						<article className="additional-furniture-information">
							<h1>About our furniture</h1>
							<p>
								Our munltifunctinoal collection blends design and function to
								suit your individual taste. Make each room unique, or pick a
								cohesive theme that best expresses your interest and what
								inspires you. Find the furniture pieces you need, from
								traditional to contemporary styles or anything in between.
								Priduct specialists are available to help you create your dream
								space.
							</p>
						</article>

						<div className="image-container">
							<img src={AboutLightImg} alt="light theme interior image" />
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
