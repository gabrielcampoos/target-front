import { useNavigate } from 'react-router-dom';
import BgConceitualRestrict from '../../assets/images/bg-conceitual-restrict.png';
import { Box, Button, Grid } from '@mui/material';

export const Portfolio = () => {
	const navigate = useNavigate();

	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				background: '#000',
			}}
		>
			<Grid
				container
				spacing={{ xs: 2, sm: 2, md: 4 }}
				columns={{ xs: 12, sm: 12, md: 12 }}
			>
				<Grid item xs={12} sm={12} md={12}>
					<Box
						sx={{
							width: '100%',
							height: '300px',
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BgConceitualRestrict})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}
					>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Button
								variant="contained"
								color="error"
								onClick={() =>
									navigate('/conceitual-proposta-462')
								}
							>
								Conceitual
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
