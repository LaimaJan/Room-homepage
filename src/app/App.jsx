import { useState, useRef, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import MainContent from './components/MainContent/MainContent';
import AboutOurFurniture from './components/AboutOurFurniture/AboutOurFurniture';

function App() {
	const [appWidth, setAppWidth] = useState(0);

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
				<Navigation />
				<MainContent appWidth={appWidth} />
				<AboutOurFurniture />
			</div>
		</>
	);
}

export default App;
