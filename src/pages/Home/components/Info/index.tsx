import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import Targui from '../../../../assets/images/targui.png';
import { InfoSm } from './components/InfoSm';
import { Logo } from './components/Logo';

export const Info = () => {
	const service = document.getElementById('service');

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			{(smDown && (
				<>
					<InfoSm />
				</>
			)) || (
				<Box
					component="section"
					sx={{
						width: '100%',
						height: '900px',
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
							spacing={{ xs: 2, sm: 2, md: 4 }}
							columns={{ xs: 12, sm: 12, md: 12 }}
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
								md={6}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									position: 'relative',
									zIndex: 2,
									top: -40,
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
									O seu negócio precisa da estratégia certa
									para decolar!
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '17px',
									}}
								>
									Tudo começa com um bom planejamento
									personalizado para cada negócio, de acordo
									com cada produto, com cada mercado, com cada
									público.
								</Typography>

								<Button
									variant="contained"
									color="error"
									sx={{
										borderRadius: '20px',
									}}
									onClick={() =>
										service?.scrollIntoView({
											behavior: 'smooth',
										})
									}
								>
									Nossos serviços.
								</Button>
							</Grid>
							<Grid
								item
								xs={12}
								sm={12}
								md={2}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									position: 'relative',
									zIndex: 2,
									top: -40,
								}}
							>
								<Box
									component="img"
									src={Targui}
									sx={{
										background: 'transparent',
									}}
								/>
							</Grid>
						</Grid>
					</Container>
				</Box>
			)}
		</>
	);
};
