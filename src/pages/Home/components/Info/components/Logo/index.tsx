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
					zIndex: 1,
					top: 870,
				}}
			/>
			<Box
				component="div"
				className="logoInf"
				sx={{
					position: 'absolute',
					zIndex: 1,
					top: 1060,
				}}
			/>
			<Box
				component="div"
				sx={{
					width: '70px',
					height: '70px',
					borderRadius: '50%',
					background: '#ff0000',
					position: 'absolute',
					top: 1320,
				}}
			/>
		</Box>
	);
};
