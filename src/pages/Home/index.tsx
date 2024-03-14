import { Box } from '@mui/material';
import { Banner } from './components/Banner';

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
		</Box>
	);
};
