import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { Logo } from './components/Logo';

export const Info = () => {
	const service = document.getElementById('service');

	return (
		<Box
			component="section"
			sx={{
				width: '100%',
				height: '100%',
			}}
		>
			<Container
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Grid
					container
					spacing={{ xs: 2, sm: 2, md: 10 }}
					columns={{ xs: 12, sm: 12, md: 8 }}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Grid item xs={12} sm={12} md={4}>
						<Logo />
					</Grid>

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
						}}
					>
						<Typography
							component="h1"
							variant="h5"
							sx={{
								fontSize: '50px',
								fontWeight: 700,
								lineHeight: '60px',
								mb: 3,
							}}
						>
							O seu negócio precisa da estratégia certa para
							decolar!
						</Typography>

						<Typography
							component="p"
							variant="subtitle1"
							sx={{
								fontSize: '17px',
							}}
						>
							Tudo começa com um bom planejamento personalizado
							para cada negócio, de acordo com cada produto, com
							cada mercado, com cada público.
						</Typography>

						<Button
							variant="contained"
							color="error"
							sx={{
								borderRadius: '20px',
							}}
							onClick={() =>
								service?.scrollIntoView({ behavior: 'smooth' })
							}
						>
							Nossos serviços.
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
