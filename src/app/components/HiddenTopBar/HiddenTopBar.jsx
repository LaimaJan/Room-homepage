import './HiddenTopBar.css';

export default function HiddenTopBar({
	hamburgerIconClicked,
	openCloseTopNav,
}) {
	return (
		<>
			<nav>
				<div
					className={`hidden-top-bar-container ${
						hamburgerIconClicked ? 'show' : ''
					}`}
				>
					<div className="hidden-top-bar">
						<div className="icon-close-container" onClick={openCloseTopNav}>
							<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
									fill="#000"
									fillRule="evenodd"
									opacity=".201"
								/>
							</svg>
						</div>
						<div className="hidden-nav-links-container">
							<a href="#">home</a>
							<a href="#">shop</a>
							<a href="#">about</a>
							<a href="#">contact</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
