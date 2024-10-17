import { Box } from '@mui/material';

import { MyAppBar } from './components/AppBar';
import { Banner } from './components/Banner';
import FloatingActionButtonSize from './components/FloatingButton';
import { Footer } from './components/Footer';
import { Info } from './components/Info';
import { Service } from './components/Service';
import { Courses } from './components/Courses';
import { Restrict } from './components/Restrict';
import CustomizedSwitches from './components/Switch';
import { useEffect, useState } from 'react';

export const Home = () => {
	const [night, setNight] = useState(true);

	const [background, setBackground] = useState('#000');

	const [color, setColor] = useState('#fff');

	useEffect(() => {
		if (night === false) {
			setBackground('#ffff');
			setColor('#000');
		} else {
			setBackground('#000');
			setColor('#fff');
		}
	}, [night]);

	return (
		<Box
			component="main"
			sx={{
				background: background,
				color: color,
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: 20,
					right: 0,
					zIndex: 2,
				}}
			>
				<CustomizedSwitches night={night} setNight={setNight} />
			</Box>
			<Banner />
			<Info />
			<Service color={color} />
			<Courses />
			<Footer />
			<FloatingActionButtonSize />
		</Box>
	);
};
