import { Box, Button, Grid, Typography } from '@mui/material';
import BgConceitualRestrict from '../../../../assets/images/bg-conceitual-restrict.png';
import { useNavigate } from 'react-router-dom';
import ModalRestrict from './components/Modal';
import { useState } from 'react';

export const Restrict = () => {
	const [open, setOpen] = useState(false);
	const [code, setCode] = useState('');

	const navigate = useNavigate();

	return (
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
							justifyContent: 'center',
							alignItems: 'center',
							p: 3,
						}}
					>
						<Typography
							component="h1"
							variant="h4"
							sx={{
								fontWeight: 700,
								color: '#fff',
							}}
						>
							Portfólio
						</Typography>
					</Box>
					<Box
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
					</Box>
				</Grid>
			</Grid>
			<ModalRestrict
				open={open}
				setOpen={setOpen}
				code={code}
				setCode={setCode}
			/>
		</>
	);
};
