import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { ListServiceSm } from './components/ListService';

export const ServiceSm = () => {
	const footerSm = document.getElementById('footerSm');

	return (
		<Box
			id="serviceSm"
			component="section"
			sx={{
				width: '100%',
				height: '100%',
			}}
		>
			<Container>
				<Grid
					container
					spacing={{ xs: 2, sm: 2, md: 4 }}
					columns={{ xs: 12, sm: 12, md: 12 }}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						pt: 10,
						pb: 10,
					}}
				>
					<Grid item xs={12} sm={6} md={6}>
						<Typography
							component="h1"
							variant="h5"
							sx={{
								fontSize: '50px',
								fontWeight: 700,
								lineHeight: '60px',
								mb: 3,
								textAlign: 'center',
							}}
						>
							O que podemos fazer pelo seu negócio?
						</Typography>

						<Typography
							component="p"
							variant="subtitle1"
							sx={{
								fontSize: '17px',
								textAlign: 'center',
							}}
						>
							Nós explicamos sem palavras difíceis
						</Typography>
					</Grid>

					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Button
							variant="contained"
							color="error"
							sx={{
								borderRadius: '20px',
							}}
							onClick={() =>
								footerSm?.scrollIntoView({ behavior: 'smooth' })
							}
						>
							Conta para a gente o que você precisa.
						</Button>
					</Grid>
				</Grid>
				<ListServiceSm />
			</Container>
		</Box>
	);
};
