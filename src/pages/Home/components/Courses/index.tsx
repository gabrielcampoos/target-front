import { Box, Button, Container, Grid, Typography } from '@mui/material';
import AvatarCourses from '../../../../assets/images/avatar-courses.png';
import EmBreve from '../../../../assets/images/em-breve.png';

export const Courses = () => {
	return (
		<Box
			component="section"
			sx={{
				width: '100%',
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
					<Grid item xs={12} sm={12} md={12}>
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
							Aprenda com a Target
						</Typography>
					</Grid>

					<Grid item xs={6} sm={6} md={4}>
						<Box
							component="img"
							src={AvatarCourses}
							sx={{
								width: '100%',
							}}
						/>
					</Grid>

					<Grid item xs={6} sm={6} md={4}>
						<Typography
							sx={{
								fontWeight: 700,
							}}
						>
							Na Target, oferecemos cursos de Marketing
							Empresarial para capacitar profissionais em
							estratégias digitais, desde o Marketing Raiz até o
							pago e orgânico. Tudo isso para varejo, clínicas,
							setores políticos e diversas empresas, ensinando a
							gerir comunicação, treinamentos de vendas, gestão
							financeira e sistemas de gestão. Transforme a
							presença digital da sua empresa com nossos
							especialistas!
						</Typography>
					</Grid>

					<Grid item xs={6} sm={6} md={4}>
						<Box
							component="img"
							src={EmBreve}
							sx={{
								width: '100%',
								borderRadius: '10px',
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'flex-end',
								alignItems: 'center',
								position: 'relative',
								top: -120,
							}}
						>
							<Button
								variant="contained"
								color="error"
								sx={{
									borderRadius: '20px',
								}}
							>
								Saiba mais
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
