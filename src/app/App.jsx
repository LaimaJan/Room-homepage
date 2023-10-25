import { useState, useRef, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import MainContent from './components/MainContent/MainContent';
import AboutOurFurniture from './components/AboutOurFurniture/AboutOurFurniture';
import HiddenTopBar from './components/HiddenTopBar/HiddenTopBar';

function App() {
	const [appWidth, setAppWidth] = useState(0);
	const [hamburgerIconClicked, setHamburgerIconClicked] = useState(false);

	const openCloseTopNav = () => {
		setHamburgerIconClicked(!hamburgerIconClicked);
		console.log(hamburgerIconClicked);
	};

	useEffect(() => {
		const handleResize = () => {
			setAppWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		setAppWidth(window.innerWidth);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<div className="App">
				<HiddenTopBar
					hamburgerIconClicked={hamburgerIconClicked}
					openCloseTopNav={openCloseTopNav}
				/>
				<Navigation openCloseTopNav={openCloseTopNav} />
				<MainContent appWidth={appWidth} />
				<AboutOurFurniture />
			</div>
		</>
	);
}

export default App;
