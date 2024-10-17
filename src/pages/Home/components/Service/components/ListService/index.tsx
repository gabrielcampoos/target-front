import { Box, Grid } from '@mui/material';

import Fachada from '../../../../../../assets/images/fachada bolsa.png';
import Form from '../../../../../../assets/images/form bolsa.png';
import Gestao from '../../../../../../assets/images/gestao bolsa.png';
import Logo from '../../../../../../assets/images/logo.png';
import Politico from '../../../../../../assets/images/politico bolsa.png';
import Site from '../../../../../../assets/images/site bolsa.png';
import Social from '../../../../../../assets/images/social media bolsa.png';
import Video from '../../../../../../assets/images/video bolsa.png';
import MyCard from '../Card';
import { useEffect, useState } from 'react';

interface ListServiceProps {
	color: string;
}

export const ListService = ({ color }: ListServiceProps) => {
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
					alignItems: 'flex-end',
				}}
			>
				<Grid
					item
					xs={6}
					sm={6}
					md={4}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: '100%',
						color: color,
					}}
				>
					<MyCard
						img={Politico}
						title="Gestão de campanhas politicas"
						text="Impulsione sua campanha política! Estratégias dinâmicas, comunicação eficaz e análise de dados para alcançar eleitores de maneira impactante. Vamos vencer juntos!"
						color={color}
					/>
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard
						img={Logo}
						title="Desenvolvimento de logomarca"
						text="Crie uma identidade única! Desenvolvemos logomarcas que refletem a essência da sua marca, destacando-a no mercado com estilo e personalidade. Vamos dar vida à sua marca!"
						color={color}
					/>
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard
						img={Fachada}
						title="Fachada digital"
						text="Transforme sua presença online! Com a Fachada Digital, destacamos sua marca na web, criando uma imagem impactante que atrai e conquista clientes. Vamos brilhar juntos no mundo digital!"
						color={color}
					/>
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard
						img={Form}
						title="Pesquisa de Marketing"
						text="Desbloqueie insights valiosos com nossa Pesquisa de Marketing! Analisamos seu mercado-alvo para oferecer dados precisos e estratégias eficazes. Vamos impulsionar seus negócios com inteligência e precisão!"
						color={color}
					/>
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard
						img={Gestao}
						title="Gestão de trafego"
						text="Maximize seu alcance online! Com a Gestão de Tráfego, direcionamos visitantes qualificados para o seu site, impulsionando sua presença e conversões. Vamos dominar o digital juntos!"
						color={color}
					/>
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard
						img={Site}
						title="Sites"
						text="Construímos sua presença online! Sites impressionantes, funcionais e personalizados para impulsionar sua marca e conectar com seu público-alvo. Vamos criar sua plataforma digital de sucesso juntos!"
						color={color}
					/>
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard
						img={Social}
						title="Social Media"
						text="Maximize sua presença online com nossa expertise em Social Mídia! Criamos estratégias personalizadas e conteúdo envolvente para impulsionar sua marca e envolver seu público-alvo. Vamos alcançar resultados extraordinários juntos!"
						color={color}
					/>
				</Grid>

				<Grid item xs={6} sm={6} md={4}>
					<MyCard
						img={Video}
						title="Video Maker"
						text="Crie vídeos excepcionais conosco! Nossa equipe de Video Maker transforma sua narrativa em produções visualmente cativantes e envolventes. Deixe-nos contar sua história de forma impactante e memorável!"
						color={color}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};
