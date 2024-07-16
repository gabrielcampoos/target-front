import { Box, Typography } from '@mui/material';
import { ConceitualAnimation } from './components/ConceitualAnimation';

export const Conceitual = () => {
	return (
		<Box
			component="main"
			sx={{
				width: '100%',
				height: '100vh',
			}}
		>
			{/* <Box
				component="section"
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: 5,
				}}
			>
				<Typography>Conceitual</Typography>
			</Box> */}

			<Box
				component="section"
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ConceitualAnimation />
			</Box>

			<Box
				sx={{
					width: '100%',
					height: '800px',
				}}
			></Box>
		</Box>
	);
};
