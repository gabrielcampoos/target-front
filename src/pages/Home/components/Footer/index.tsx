import { Box, Button, Grid, Typography } from '@mui/material';

import Pet from '../../../../assets/images/pet.png';
import { BackgroundWave } from './BackgroundWave';

export const Footer = () => {
	return (
		<Box
			id="footer"
			component="footer"
			sx={{
				width: '100%',
				height: '100%',
				mt: 30,
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
				<Grid item xs={6} sm={6} md={4}>
					<Typography
						component="h1"
						variant="h5"
						sx={{
							fontSize: '30px',
							fontWeight: 700,
							position: 'relative',
							zIndex: 2,
							mb: 3,
							top: 200,
						}}
					>
						Quer fazer o seu negócio voar cada vez mais alto?
					</Typography>
					<Typography
						component="p"
						variant="subtitle1"
						sx={{
							fontSize: '17px',
							position: 'relative',
							top: 200,
						}}
					>
						Vamos tomar um café e conversar sobre o que podemos
						fazer pelo seu negócio.
					</Typography>

					<a href="https://api.whatsapp.com/send/?phone=5518996194854&text=Oi, gostaria de saber mais sobre seus serviços.&type=phone_number&app_absent=0">
						<Button
							variant="contained"
							color="error"
							sx={{
								borderRadius: '20px',
								mt: 3,
								zIndex: 2,
								position: 'relative',
								top: 200,
							}}
						>
							Dá Um &quot;oi&quot; para a gente.
						</Button>
					</a>
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<Box
						component="img"
						src={Pet}
						sx={{
							width: '100%',
							height: '100%',
							position: 'relative',
							bottom: -180,
						}}
					/>
				</Grid>

				<BackgroundWave />
			</Grid>
		</Box>
	);
};
