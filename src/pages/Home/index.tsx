import { Box } from '@mui/material';

import { Banner } from './components/Banner';
import { Info } from './components/Info';
import { Service } from './components/Service';
import { Footer } from './components/Footer';

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
		</Box>
	);
};
