import { Box, Grid, Typography } from '@mui/material';

export const TypographySectionSm = () => {
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
						Tipografia
					</Typography>

					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							pt: 5,
							gap: 5,
						}}
					>
						<Typography
							component="h1"
							variant="h2"
							sx={{
								fontWeight: 700,
							}}
						>
							ABCDEFGH
						</Typography>

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
							As fontes Sans serif são ao mesmo tempo mínimas e
							envolventes. São utilizadas por marcas que querem
							demonstrar uma atitude simples e sem absurdos. Este
							tipo de letra não tem elementos decorativos que
							distraem o olhar e transmite sentimentos de
							simplicidade, confiança e inovação. O visual limpo e
							moderno dessa fonte faz com que ela seja
							verdadeiramente versátil.
						</Typography>
					</Box>

					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							pt: 5,
							gap: 5,
						}}
					>
						<Typography
							component="h1"
							variant="h2"
							sx={{
								pt: 10,
							}}
						>
							ABCDEFGH
						</Typography>

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
							As fontes Sans serif são ao mesmo tempo mínimas e
							envolventes. São utilizadas por marcas que querem
							demonstrar uma atitude simples e sem absurdos. Este
							tipo de letra não tem elementos decorativos que
							distraem o olhar e transmite sentimentos de
							simplicidade, confiança e inovação. O visual limpo e
							moderno dessa fonte faz com que ela seja
							verdadeiramente versátil.
						</Typography>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};
