import { Box, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Can from '../../../../../../../assets/images/lata.webp';

export default function MyCardSm() {
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
						src={Can}
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
					<Typography gutterBottom variant="h5" component="div">
						Criar toda a identidade visual
					</Typography>
					<Typography variant="body2" color="text.secondary">
						&quot;Uma imagem vale mais que mil palavras&quot;. Pois
						é, todo negócio precisa de uma marca forte e de toda uma
						identidade visual que faça o cliente bater o olho e
						saber do que se trata.
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
