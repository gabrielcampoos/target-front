import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import { ListService } from './components/ListService';
import { ServiceSm } from './ServiceSm';

interface ServiceProps {
	color: string;
}

export const Service = ({ color }: ServiceProps) => {
	const footer = document.getElementById('footer');

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			{(smDown && (
				<>
					<ServiceSm />
				</>
			)) || (
				<Box
					id="service"
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
							<Grid item xs={6} sm={6} md={6}>
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
									O que podemos fazer pelo seu negócio?
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '17px',
									}}
								>
									Nós explicamos sem palavras difíceis
								</Typography>
							</Grid>

							<Grid
								item
								xs={6}
								sm={6}
								md={6}
								sx={{
									display: 'flex',
									justifyContent: 'flex-end',
									alignItems: 'flex-end',
								}}
							>
								<Button
									variant="contained"
									color="error"
									sx={{
										borderRadius: '20px',
									}}
									onClick={() =>
										footer?.scrollIntoView({
											behavior: 'smooth',
										})
									}
								>
									Conta para a gente o que você precisa.
								</Button>
							</Grid>
						</Grid>
						<ListService color={color} />
					</Container>
				</Box>
			)}
		</>
	);
};
