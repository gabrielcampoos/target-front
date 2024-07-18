import { Box, Grid } from '@mui/material';
import Item1 from '../../../../../assets/images/item-1.png';
import Item2 from '../../../../../assets/images/item-2.png';
import Item5 from '../../../../../assets/images/item-5.png';
import Item6 from '../../../../../assets/images/item-6.png';
import Item7 from '../../../../../assets/images/item-7.png';
import Item8 from '../../../../../assets/images/item-8.png';
import Mark from '../../../../../assets/images/mark.png';

export const ItemsSm = () => {
	return (
		<Grid
			container
			spacing={{ xs: 2, sm: 2, md: 1 }}
			columns={{ xs: 12, sm: 12, md: 12 }}
		>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					pt: 5,
				}}
			>
				<Grid item xs={12} sm={12} md={3}>
					<Box component="img" src={Item1} />
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Box component="img" src={Item2} />
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Box component="img" src={Item5} />
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Box component="img" src={Item6} />
				</Grid>

				<Grid
					item
					xs={12}
					sm={12}
					md={3}
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
							width: '30%',
							position: 'absolute',
							opacity: 0.3,
						}}
					/>
					<Box component="img" src={Item7} />
				</Grid>

				<Grid
					item
					xs={12}
					sm={12}
					md={3}
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
							width: '30%',
							position: 'absolute',
							opacity: 0.3,
						}}
					/>
					<Box component="img" src={Item8} />
				</Grid>
			</Box>
		</Grid>
	);
};
