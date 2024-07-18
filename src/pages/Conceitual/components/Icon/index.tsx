import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import IconLogo from '../../../../assets/images/icon.png';
import { IconSm } from './IconSm';

export const Icon = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<IconSm />
				</>
			)) || (
				<>
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
									Seu ícone
								</Typography>

								<Box
									sx={{
										width: '50%',
										borderTop: '3px dashed #ccc',
										borderBottom: '3px dashed #ccc',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Box
										sx={{
											width: '100%',
											borderLeft: '3px dashed #ccc',
											borderRight: '3px dashed #ccc',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											p: 5,
										}}
									>
										<Box component="img" src={IconLogo} />
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
};
