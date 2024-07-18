import { Box, Grid, Typography } from '@mui/material';
import Plate from '../../../../../assets/images/plate.png';

export const BossSm = () => {
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
						Seja seu próprio chefe
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
							}}
						>
							O segredo da felicidade é a liberdade, mas o segredo
							da liberdade é a coragem e, sem dúvida, requer uma
							boa parte dela para dar o passo para o autoemprego.
							A beleza do empreendedorismo é que você toma suas
							próprias decisões todos os dias e determina sua
							felicidade por si mesmo.
						</Typography>
					</Box>

					<Box
						component="img"
						src={Plate}
						sx={{
							width: '100%',
						}}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};
