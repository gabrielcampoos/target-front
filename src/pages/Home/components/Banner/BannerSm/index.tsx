import { Box, Grid, Typography } from '@mui/material';

import Background from '../../../../../assets/images/banner.png';

export const BannerSm = () => {
	return (
		<Box component="section">
			<Box
				component="div"
				sx={{
					width: '100%',
					height: '400px',
					background: `url(${Background})`,
					backgroundSize: '100% 100%',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					position: 'relative',
					zIndex: 1,
				}}
			>
				<Grid
					container
					spacing={{ xs: 2, sm: 2, md: 4 }}
					columns={{ xs: 12, sm: 12, md: 12 }}
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Grid item xs={12} sm={6} md={5}>
						<Typography
							component="h1"
							sx={{
								color: '#fff',
								fontSize: '15px',
								p: 1,
							}}
						>
							Eleve os seus{' '}
							<span
								style={{ color: '#ff0000', fontSize: '18px' }}
							>
								acertos.
							</span>{' '}
							<br />
							<span
								style={{ color: '#ff0000', fontSize: '18px' }}
							>
								&quot;Em um universo de ideias.&quot;
							</span>
							.
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
