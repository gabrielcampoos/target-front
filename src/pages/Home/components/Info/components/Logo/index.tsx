import { Box } from '@mui/material';
import './styles.css';

export const Logo = () => {
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
				className="logo"
				sx={{
					position: 'absolute',
				}}
			/>
			<Box
				component="div"
				className="logoInf"
				sx={{
					position: 'absolute',
				}}
			/>
			<Box
				component="div"
				sx={{
					width: '55px',
					height: '55px',
					borderRadius: '50%',
					background: '#ff0000',
				}}
			/>
		</Box>
	);
};
