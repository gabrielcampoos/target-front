import { Box, Grid, Typography } from '@mui/material';
import LogoConceitual from '../../../assets/images/logoConceitual.png';
import LogoConceitual2 from '../../../assets/images/logoConceitual-2.png';
import LogoConceitual3 from '../../../assets/images/logoConceitual-3.png';
import { Items } from '../components/Items';
import { Card } from '../components/Card';
import { Colors } from '../components/Colors';
import { Icon } from '../components/Icon';
import { TypographySection } from '../components/Typograph';
import { Banner } from '../components/Banner';
import { QrCode } from '../components/QrCode';
import { Boss } from '../components/Boss';
import Mark from '../../../assets/images/mark.png';
import { Parallax } from '../components/Parallax';

export const ConceitualSm = () => {
	return (
		<Box
			component="main"
			sx={{
				width: '100%',
				height: '100vh',
			}}
		>
			<Box
				component="section"
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Grid
					container
					spacing={{ xs: 2, sm: 2, md: 0 }}
					columns={{ xs: 12, sm: 12, md: 12 }}
				>
					<Grid item xs={12} sm={12} md={8}>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Box
								component="img"
								src={Mark}
								sx={{
									width: '20%',
									position: 'absolute',
									opacity: 0.1,
								}}
							/>
							<Box
								component="img"
								src={LogoConceitual}
								sx={{
									width: '100%',
								}}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<Box
								component="img"
								src={LogoConceitual2}
								sx={{
									width: '100%',
									height: '100%',
								}}
							/>

							<Box
								component="img"
								src={LogoConceitual3}
								sx={{
									width: '100%',
									height: '100%',
								}}
							/>
						</Box>
					</Grid>
				</Grid>
			</Box>

			<Box
				component="section"
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Items />
			</Box>

			<Box
				component="section"
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: 5,
				}}
			>
				<Card />
			</Box>

			<Box
				component="section"
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: 5,
				}}
			>
				<Colors />
			</Box>

			<Box
				component="section"
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: 5,
				}}
			>
				<Icon />
			</Box>

			<Box
				component="section"
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: 5,
				}}
			>
				<TypographySection />
			</Box>

			<Box
				component="section"
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: 5,
				}}
			>
				<Banner />
			</Box>

			<Parallax />

			<Box
				component="section"
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: 5,
				}}
			>
				<QrCode />
			</Box>

			<Box
				component="section"
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: 5,
				}}
			>
				<Boss />
			</Box>
		</Box>
	);
};
