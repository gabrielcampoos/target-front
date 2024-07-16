import { Box } from '@mui/material';
import './styles.css';

export const LogoSm = () => {
	return (
		<Box
			component="main"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				component="div"
				className="logoSm"
				sx={{
					position: 'absolute',
					zIndex: 1,
					top: 330,
					right: 220,
				}}
			/>
			<Box
				component="div"
				className="logoInfSm"
				sx={{
					position: 'absolute',
					zIndex: 1,
					top: 365,
					right: 255,
				}}
			/>
			<Box
				component="div"
				sx={{
					width: '40px',
					height: '40px',
					borderRadius: '50%',
					background: '#ff0000',
					position: 'absolute',
					zIndex: 1,
					top: 410,
					right: 300,
				}}
			/>
		</Box>
	);
};
