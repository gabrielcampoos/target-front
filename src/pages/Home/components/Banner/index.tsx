import { Box, Grid, Typography } from '@mui/material';

import Background from '../../../../assets/images/banner.png';

export const Banner = () => {
	return (
		<Box
			component="div"
			sx={{
				width: '100%',
				height: '100%',
			}}
		>
			<Box
				component="div"
				sx={{
					width: '100%',
					height: '100%',
					background: `url(${Background})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Grid
					container
					spacing={{ xs: 2, sm: 2, md: 4 }}
					columns={{ xs: 12, sm: 12, md: 12 }}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Grid
						item
						xs={12}
						sm={12}
						md={4}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							mt: 15,
							ml: 80,
						}}
					>
						<Typography
							component="h1"
							variant="h5"
							sx={{
								color: '#fff',
								fontSize: '50px',
								fontWeight: 700,
								letterSpacing: '2px',
								mb: 10,
							}}
						>
							Target
							<br />
							<span
								style={{
									fontSize: '15px',
									fontWeight: 0,
									letterSpacing: 0,
									position: 'relative',
									top: '-35px',
								}}
							>
								marketing & tecnologia
							</span>
						</Typography>

						<Typography
							component="p"
							variant="h6"
							sx={{
								color: '#fff',
								fontSize: '20px',
								letterSpacing: '2px',
								mb: 4,
							}}
						>
							Eleve seus resultados com
						</Typography>

						<Typography
							component="h1"
							variant="h5"
							sx={{
								color: '#fff',
								fontSize: '40px',
								fontWeight: 700,
								letterSpacing: '2px',
								mb: 4,
								textAlign: 'center',
							}}
						>
							Uma Agência de
							<br />
							Infinitas Possibilidades
						</Typography>

						<Typography
							component="p"
							variant="h6"
							sx={{
								color: '#fff',
								fontSize: '20px',
								textAlign: 'center',
							}}
						>
							Desde o início uma agência que cuida de tudo que o
							cliente precise para alcançar seus objetivos.
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
