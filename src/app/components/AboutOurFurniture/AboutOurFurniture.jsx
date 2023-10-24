import AboutDarkImg from '../../images/image-about-dark.jpg';
import AboutLightImg from '../../images/image-about-light.jpg';
import './AboutOurFurniture.css';

export default function AboutOurFurniture() {
	return (
		<section>
			<div className="additional-info">
				<div className="image-container">
					<img src={AboutDarkImg} alt="dark theme interior image" />
				</div>
				<article className="additional-furniture-information">
					<h1>About our furniture</h1>
					<p>
						Our munltifunctinoal collection blends design and function to suit
						your individual taste. Make each room unique, or pick a cohesive
						theme that best expresses your interest and what inspires you. Find
						the furniture pieces you need, from traditional to contemporary
						styles or anything in between. Priduct specialists are available to
						help you create your dream space.
					</p>
				</article>

				<div className="image-container">
					<img src={AboutLightImg} alt="light theme interior image" />
				</div>
			</div>
		</section>
	);
}
