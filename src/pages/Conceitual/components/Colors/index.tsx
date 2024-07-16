import { Box, Grid, Typography } from '@mui/material';

export const Colors = () => {
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
						Suas cores
					</Typography>

					<Typography
						component="p"
						variant="subtitle1"
						sx={{
							fontSize: '1.2rem',
							fontWeight: 500,
							color: '#7d7e8a',
							textAlign: 'center',
							mb: 5,
						}}
					>
						As cores selecionadas servirão para representar a sua
						marca, comunicar os valores da
						<br />
						sua marca e reforçar a identidade da sua marca.
					</Typography>
				</Box>
			</Grid>

			<Grid item xs={12} sm={12} md={6}>
				<Box
					sx={{
						background: '#4f3b1d',
						p: 10,
					}}
				/>
			</Grid>

			<Grid item xs={12} sm={12} md={6}>
				<Box
					sx={{
						background: '#965d00',
						p: 10,
					}}
				/>
			</Grid>
		</Grid>
	);
};
