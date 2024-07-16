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

export default function MyCardSm({ img, title, text }: MyCardProps) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="div"
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
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
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						textAlign="center"
						fontSize="15px"
					>
						{title}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						textAlign="center"
						fontSize="10px"
					>
						{text}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
