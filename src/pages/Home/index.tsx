import { Box } from '@mui/material';

import { MyAppBar } from './components/AppBar';
import { Banner } from './components/Banner';
import FloatingActionButtonSize from './components/FloatingButton';
import { Footer } from './components/Footer';
import { Info } from './components/Info';
import { Service } from './components/Service';
import { Courses } from './components/Courses';

export const Home = () => {
	return (
		<Box component="main" sx={{
			background: '#000',
			color: '#fff'
		}}>
			<Banner />
			<Info />
			<Service />
			<Courses />
			<Footer />
			<FloatingActionButtonSize />
		</Box>
	);
};
