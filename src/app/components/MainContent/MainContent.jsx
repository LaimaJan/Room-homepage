import './MainContent.css';
import DesktopHeroImage1 from '../../images/desktop-image-hero-1.jpg';

export default function MainContent() {
	return (
		<>
			<section>
				<div className="main-content">
					<img
						className="main-content-img"
						src={DesktopHeroImage1}
						alt="chairs and desk with bonsai tree"
					/>

					<article className="main-info-container">
						<div className="main-info">
							<h1>Discover innovative ways to decorate</h1>
							<p>
								We provide unmatched quality, comfort, and style for property
								owners across the country. Our experts combine form and function
								in bringing your vision to life. Create a room in your own style
								with our collection and make your property a reflection of you
								and what you love.
							</p>
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
							<div className="button-left">
								<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13 0L1 12l12 12"
										stroke="#FFF"
										fill="none"
										fillRule="evenodd"
									/>
								</svg>
							</div>
							<div className="button-right">
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
					</article>
				</div>
			</section>
		</>
	);
}
