import { Box } from '@mui/material';

import { MyAppBar } from './components/AppBar';
import { Banner } from './components/Banner';
import FloatingActionButtonSize from './components/FloatingButton';
import { Footer } from './components/Footer';
import { Info } from './components/Info';
import { Service } from './components/Service';

export const Home = () => {
	return (
		<Box
			component="main"
			sx={{
				width: '100%',
				height: '100vh',
			}}
		>
			<Banner />
			<Info />
			<Service />
			<Footer />
			<FloatingActionButtonSize />
		</Box>
	);
};
