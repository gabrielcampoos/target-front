import { Box, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface MyCardProps {
	img: string;
	title: string;
	text: string;
}

export default function MyCard({ img, text, title }: MyCardProps) {
	return (
		<Card sx={{ maxWidth: 350, background: 'transparent', color: '#fff' }}>
			<CardActionArea>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						width: '100%',
						height: '100%',
					}}
				>
					<CardMedia
						component="div"
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							width: '100%',
							height: '100%',
						}}
					>
						<Box
							component="img"
							src={img}
							sx={{
								width: '50%',
								height: '100%',
								'&:hover': {
									transform: 'scale(0.9)',
								},
							}}
						/>
					</CardMedia>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						width: '100%',
						height: '100%',
					}}
				>
					<CardContent>
						<Typography
							gutterBottom
							variant="h6"
							component="div"
							sx={{
								color: '#fff',
							}}
						>
							{title}
						</Typography>
						<Typography
							variant="subtitle2"
							color="text.secondary"
							sx={{
								color: '#fff',
							}}
						>
							{text}
						</Typography>
					</CardContent>
				</Box>
			</CardActionArea>
		</Card>
	);
}
