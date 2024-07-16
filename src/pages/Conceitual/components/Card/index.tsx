import { Box, Grid } from '@mui/material';
import Card1 from '../../../../assets/images/card-1.png';
import Card2 from '../../../../assets/images/card-2.png';
import Mark from '../../../../assets/images/mark.png';

export const Card = () => {
	return (
		<Grid
			container
			spacing={{ xs: 2, sm: 2, md: 2 }}
			columns={{ xs: 12, sm: 12, md: 12 }}
		>
			<Grid
				item
				xs={12}
				sm={12}
				md={6}
				sx={{
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
						opacity: 0.2,
					}}
				/>
				<Box
					component="img"
					src={Card1}
					sx={{
						width: '90%',
					}}
				/>
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
					src={Card2}
					sx={{
						width: '90%',
					}}
				/>
			</Grid>
		</Grid>
	);
};
