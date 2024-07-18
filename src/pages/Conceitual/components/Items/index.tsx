import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import Item1 from '../../../../assets/images/item-1.png';
import Item2 from '../../../../assets/images/item-2.png';
import Item5 from '../../../../assets/images/item-5.png';
import Item6 from '../../../../assets/images/item-6.png';
import Item7 from '../../../../assets/images/item-7.png';
import Item8 from '../../../../assets/images/item-8.png';
import Mark from '../../../../assets/images/mark.png';
import { ItemsSm } from './ItemsSm';

export const Items = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<ItemsSm />
				</>
			)) || (
				<>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 1 }}
						columns={{ xs: 12, sm: 12, md: 12 }}
					>
						<Grid item xs={12} sm={12} md={3}>
							<Box
								component="img"
								src={Item1}
								sx={{
									ml: 15,
								}}
							/>
						</Grid>

						<Grid item xs={12} sm={12} md={3}>
							<Box
								component="img"
								src={Item2}
								sx={{
									ml: 15,
								}}
							/>
						</Grid>

						<Grid item xs={12} sm={12} md={3}>
							<Box
								component="img"
								src={Item5}
								sx={{
									ml: 15,
								}}
							/>
						</Grid>

						<Grid item xs={12} sm={12} md={3}>
							<Box
								component="img"
								src={Item6}
								sx={{
									ml: 15,
								}}
							/>
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
								position: 'relative',
								ml: 10,
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
								position: 'relative',
								ml: 15,
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
					</Grid>
				</>
			)}
		</>
	);
};
