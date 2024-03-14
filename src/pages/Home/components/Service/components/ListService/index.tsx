import { Box, Grid } from '@mui/material';

import MyCard from '../Card';

export const ListService = () => {
	return (
		<Box
			component="div"
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
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					pb: 8,
				}}
			>
				<Grid item xs={6} sm={6} md={4}>
					<MyCard />
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard />
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard />
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard />
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard />
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard />
				</Grid>
			</Grid>
		</Box>
	);
};
