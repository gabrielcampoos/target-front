import {
	Box,
	Button,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

import Pet from '../../../../assets/images/targui-foguete.png';
import { BackgroundWave } from './BackgroundWave';
import { FooterSm } from './FooterSm';

export const Footer = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			{(smDown && <FooterSm />) || (
				<Box
					id="footer"
					component="footer"
					sx={{
						width: '100%',
						height: '100%',
					}}
				>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 4 }}
						columns={{ xs: 12, sm: 12, md: 12 }}
						sx={{
							width: '100%',
							height: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Grid item xs={6} sm={6} md={4}>
							<Typography
								component="h1"
								variant="h5"
								sx={{
									fontSize: '30px',
									fontWeight: 700,
									position: 'relative',
									zIndex: 2,
									mb: 3,
									top: 200,
								}}
							>
								Quer fazer o seu negócio voar cada vez mais
								alto?
							</Typography>
							<Typography
								component="p"
								variant="subtitle1"
								sx={{
									fontSize: '17px',
									position: 'relative',
									top: 200,
								}}
							>
								Vamos tomar um café e conversar sobre o que
								podemos fazer pelo seu negócio.
							</Typography>

							<a href="https://api.whatsapp.com/send/?phone=5518996194854&text=Oi, gostaria de saber mais sobre seus serviços.&type=phone_number&app_absent=0">
								<Button
									variant="contained"
									color="error"
									sx={{
										borderRadius: '20px',
										mt: 3,
										zIndex: 2,
										position: 'relative',
										top: 200,
									}}
								>
									Dá Um &quot;oi&quot; para a gente.
								</Button>
							</a>
						</Grid>

						<Grid item xs={6} sm={6} md={4}>
							<Box
								component="img"
								src={Pet}
								sx={{
									width: '50%',
									height: '50%',
									position: 'relative',
									bottom: -180,
								}}
							/>
						</Grid>

						<Box
							sx={{
								width: '100%',
								position: 'relative',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								bottom: -240,
							}}
						>
							<IconButton
								href="https://www.instagram.com/target_assis/"
								sx={{
									mr: 2,
								}}
							>
								<InstagramIcon color="error" fontSize="large" />
							</IconButton>

							<IconButton
								href="https://www.youtube.com/channel/UCKDngRMiLll3ggSavKmYcZw"
								sx={{
									ml: 2,
								}}
							>
								<YouTubeIcon color="error" fontSize="large" />
							</IconButton>
							<IconButton
								href="https://www.facebook.com/profile.php?id=61557787733080"
								sx={{
									ml: 2,
								}}
							>
								<FacebookIcon color="error" fontSize="large" />
							</IconButton>
						</Box>
						<BackgroundWave />
					</Grid>
				</Box>
			)}
		</>
	);
};
