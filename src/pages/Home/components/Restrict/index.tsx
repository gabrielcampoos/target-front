import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import BgConceitualRestrict from '../../../../assets/images/bg-conceitual-restrict.png';
import ModalRestrict from './components/Modal';
import { useState } from 'react';
import { RestrictSm } from './RestrictSm';

export const Restrict = () => {
	const [open, setOpen] = useState(false);
	const [code, setCode] = useState('');

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<RestrictSm />
				</>
			)) || (
				<>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 4 }}
						columns={{ xs: 12, sm: 12, md: 12 }}
					>
						<Grid item xs={12} sm={12} md={12}>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'flex-start',
									alignItems: 'center',
									p: 3,
								}}
							>
								<Button
									variant="contained"
									color="error"
									size="small"
									onClick={() => setOpen(true)}
								>
									Área Restrita
								</Button>
							</Box>
							{/* <Box
								sx={{
									width: '20%',
									height: '300px',
									display: 'flex',
									justifyContent: 'flex-start',
									alignItems: 'center',
									background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BgConceitualRestrict})`,
									backgroundPosition: 'center',
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									ml: 15,
									mb: 5,
									mt: 5,
								}}
							>
								<Box
									sx={{
										width: '100%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Button
										variant="contained"
										color="error"
										onClick={() => setOpen(true)}
									>
										Conceitual
									</Button>
								</Box>
							</Box> */}
						</Grid>
					</Grid>
				</>
			)}

			<ModalRestrict
				open={open}
				setOpen={setOpen}
				code={code}
				setCode={setCode}
			/>
		</>
	);
};
