import { Box, Button, Grid, Typography } from '@mui/material';

import Pet from '../../../../assets/images/pet.png';
import { BackgroundWave } from './BackgroundWave';

export const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				width: '100%',
				height: '100%',
				mt: 50,
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
					alignItems: 'center',
				}}
			>
				<Grid
					item
					xs={6}
					sm={6}
					md={4}
					sx={{
						position: 'relative',
						top: -300,
					}}
				>
					<Typography
						component="h1"
						variant="h5"
						sx={{
							fontSize: '30px',
							fontWeight: 700,
							position: 'relative',
							zIndex: 2,
							mb: 3,
						}}
					>
						Quer fazer o seu negócio voar cada vez mais alto?
					</Typography>
					<Typography
						component="p"
						variant="subtitle1"
						sx={{
							fontSize: '17px',
						}}
					>
						Vamos tomar um café e conversar sobre o que podemos
						fazer pelo seu negócio.
					</Typography>

					<Button
						variant="contained"
						color="error"
						sx={{
							borderRadius: '20px',
							mt: 3,
						}}
					>
						Da um oi para a gente.
					</Button>
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<Box
						component="img"
						src={Pet}
						sx={{
							width: '100%',
							height: '100%',
							position: 'relative',
							top: -280,
						}}
					/>
				</Grid>
				<Box
					component="svg"
					sx={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						zIndex: 1,
					}}
				>
					<BackgroundWave />
				</Box>
			</Grid>
		</Box>
	);
};
