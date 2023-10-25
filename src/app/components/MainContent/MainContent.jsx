import './MainContent.css';
import { useState } from 'react';

import DesktopHeroImage1 from '../../images/desktop-image-hero-1.jpg';
import DesktopHeroImage2 from '../../images/desktop-image-hero-2.jpg';
import DesktopHeroImage3 from '../../images/desktop-image-hero-3.jpg';
import MobileHeroImage1 from '../../images/mobile-image-hero-1.jpg';
import MobileHeroImage2 from '../../images/mobile-image-hero-2.jpg';
import MobileHeroImage3 from '../../images/mobile-image-hero-3.jpg';

export default function MainContent({ appWidth }) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const pageWidth = appWidth;

	const mainSectionImages = [
		{
			id: 1,
			imgDesktop: DesktopHeroImage1,
			imgMobile: MobileHeroImage1,
			heading: 'Discover innovative ways to decorate',
			description:
				'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
		},
		{
			id: 2,
			imgDesktop: DesktopHeroImage2,
			imgMobile: MobileHeroImage2,

			heading: 'We are available all across the globe',
			description:
				"With stores all ovet the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using out store locator. Any questions? Don't hesitate to contact us today.",
		},
		{
			id: 3,
			imgDesktop: DesktopHeroImage3,
			imgMobile: MobileHeroImage3,

			heading: 'Manufactured with the best materials',
			description:
				'Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
		},
	];

	const handleArrowClick = (direction) => {
		if (direction === 'left') {
			setSelectedIndex((prevIndex) =>
				prevIndex === 0 ? mainSectionImages.length - 1 : prevIndex - 1
			);
		} else if (direction === 'right') {
			setSelectedIndex((prevIndex) =>
				prevIndex === mainSectionImages.length - 1 ? 0 : prevIndex + 1
			);
		}
	};

	const selectedImage =
		appWidth > 1360
			? mainSectionImages[selectedIndex].imgDesktop
			: mainSectionImages[selectedIndex].imgMobile;

	return (
		<>
			<section>
				<div className="main-content">
					<img
						className="main-content-img"
						src={selectedImage}
						alt="chairs and desk with bonsai tree"
					/>
					<div className="change-img-button-container-mobile">
						<div
							className="button-left"
							onClick={() => handleArrowClick('left')}
						>
							<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M13 0L1 12l12 12"
									stroke="#FFF"
									fill="none"
									fillRule="evenodd"
								/>
							</svg>
						</div>
						<div
							className="button-right"
							onClick={() => handleArrowClick('right')}
						>
							<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1 0l12 12L1 24"
									stroke="#FFF"
									fill="none"
									fillRule="evenodd"
								/>
							</svg>
						</div>
					</div>

					<div className="main-info-container">
						<div className="main-info">
							<h1>{mainSectionImages[selectedIndex].heading}</h1>
							<p>{mainSectionImages[selectedIndex].description}</p>
							<div className="shop-now-container">
								<p>Shop now</p>
								<svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
										fill="#000"
										fillRule="nonzero"
									/>
								</svg>
							</div>
						</div>
						<div className="change-img-button-container">
							<div
								className="button-left"
								onClick={() => handleArrowClick('left')}
							>
								<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13 0L1 12l12 12"
										stroke="#FFF"
										fill="none"
										fillRule="evenodd"
									/>
								</svg>
							</div>
							<div
								className="button-right"
								onClick={() => handleArrowClick('right')}
							>
								<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M1 0l12 12L1 24"
										stroke="#FFF"
										fill="none"
										fillRule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
