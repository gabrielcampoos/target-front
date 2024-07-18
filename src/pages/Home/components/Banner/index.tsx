import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import Background from '../../../../assets/images/banner.png';
import { BannerSm } from './BannerSm';
import ModalRestrict from '../Restrict/components/Modal';
import { useState } from 'react';

export const Banner = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const [open, setOpen] = useState(false);
	const [code, setCode] = useState('');

	return (
		<>
			{(smDown && (
				<>
					<BannerSm />
				</>
			)) || (
				<Box
					component="section"
					sx={{
						width: '100%',
						height: '900px',
					}}
				>
					<Box
						component="div"
						sx={{
							width: '100%',
							height: '100%',
							background: `url(${Background})`,
							backgroundSize: '100% 100%',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							position: 'relative',
							zIndex: 1,
						}}
					>
						<Grid
							container
							spacing={{ xs: 2, sm: 2, md: 4 }}
							columns={{ xs: 12, sm: 12, md: 10 }}
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<Grid
								item
								xs={6}
								sm={6}
								md={5}
								sx={{
									mr: 35,
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										color: '#fff',
									}}
								>
									Eleve os seus{' '}
									<span
										style={{
											color: '#ff0000',
											fontSize: '40px',
										}}
									>
										acertos
									</span>{' '}
									em uma agência que desde o início,
									<br />
									cuida de tudo para alcançar seus objetivos
									<br />
									<span
										style={{
											color: '#ff0000',
											fontSize: '40px',
										}}
									>
										&quot;em um universo de ideias.&quot;
									</span>
									.
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Box>
			)}
		</>
	);
};
