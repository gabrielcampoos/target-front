import { Box, Button, Grid, Typography } from '@mui/material';

import Pet from '../../../../../assets/images/targui-foguete.png';
import { BackgroundWaveSm } from './BackgroundWave';

export const FooterSm = () => {
	return (
		<Box
			id="footerSm"
			component="footer"
			sx={{
				width: '100%',
				mt: 1,
			}}
		>
			<Grid
				container
				spacing={{ xs: 2, sm: 2, md: 4 }}
				columns={{ xs: 12, sm: 12, md: 12 }}
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						gap: 1,
						mb: 5,
					}}
				>
					<Typography
						component="h1"
						variant="h5"
						sx={{
							fontSize: '20px',
							fontWeight: 700,
							zIndex: 2,
							p: 1,
						}}
					>
						Quer fazer o seu negócio voar cada vez mais alto?
					</Typography>
					<Typography
						component="p"
						variant="subtitle1"
						sx={{
							fontSize: '17px',
							p: 1,
						}}
					>
						Vamos tomar um café e conversar sobre o que podemos
						fazer pelo seu negócio.
					</Typography>

					<a
						href="https://api.whatsapp.com/send/?phone=5518996194854&text=Oi, gostaria de saber mais sobre seus serviços.&type=phone_number&app_absent=0"
						style={{ textDecoration: 'none' }}
					>
						<Button
							variant="contained"
							color="error"
							sx={{
								borderRadius: '20px',
								zIndex: 2,
								position: 'relative',
								mt: 2,
							}}
						>
							Dá Um &quot;oi&quot; para a gente.
						</Button>
					</a>
				</Grid>

				<Grid
					item
					xs={5}
					sm={6}
					md={4}
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						flexDirection: 'column',
						position: 'relative',
						zIndex: 2,
					}}
				>
					<Box
						component="img"
						src={Pet}
						sx={{
							position: 'relative',
							width: '60%',
							height: '60%',
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};
