import { Box, Button, Grid, Typography } from '@mui/material';
import BgConceitualRestrict from '../../../../../assets/images/bg-conceitual-restrict.png';
import ModalRestrict from '../components/Modal';
import { useState } from 'react';

export const RestrictSm = () => {
	const [open, setOpen] = useState(false);
	const [code, setCode] = useState('');

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
							width: '100%',
							height: '100px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BgConceitualRestrict})`,
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<Button
								variant="contained"
								color="error"
								size="small"
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
