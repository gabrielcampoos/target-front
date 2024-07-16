import { Box, Grid, Typography } from '@mui/material';
import BannerOut from '../../../../assets/images/bannerOut.png';

export const Banner = () => {
	return (
		<Grid
			container
			spacing={{ xs: 2, sm: 2, md: 0 }}
			columns={{ xs: 12, sm: 12, md: 12 }}
		>
			<Grid item xs={12} sm={12} md={12}>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						pt: 10,
						gap: 3,
					}}
				>
					<Typography
						component="h1"
						variant="h4"
						sx={{
							fontWeight: 700,
						}}
					>
						If you can dream it, you can do it
					</Typography>

					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Typography
							component="p"
							variant="subtitle1"
							sx={{
								fontSize: '1.1rem',
								fontWeight: 400,
								color: '#7d7e8a',
								textAlign: 'center',
								pl: 50,
								pr: 50,
							}}
						>
							Dê o primeiro passo em sua nova vida e inicie seus
							negócios com um logotipo espetacular. Use o código
							do cupom DISNEY para obter um desconto de 10% em
							todos os pacotes.
						</Typography>
					</Box>

					<Box component="img" src={BannerOut} />
				</Box>
			</Grid>
		</Grid>
	);
};
