import { Box, Grid, Typography } from '@mui/material';
import QrCodeImg from '../../../../assets/images/qrCode.png';

export const QrCode = () => {
	return (
		<Grid
			container
			spacing={{ xs: 2, sm: 2, md: 0 }}
			columns={{ xs: 12, sm: 12, md: 12 }}
		>
			<Grid item xs={12} sm={12} md={12}>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						pt: 10,
						gap: 3,
					}}
				>
					<Typography
						component="h1"
						variant="h4"
						sx={{
							fontWeight: 700,
						}}
					>
						Gerador de código QR ™
					</Typography>

					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Typography
							component="p"
							variant="subtitle1"
							sx={{
								fontSize: '1.1rem',
								fontWeight: 400,
								color: '#7d7e8a',
								textAlign: 'center',
								pl: 30,
								pr: 30,
							}}
						>
							Apresentando o Gerador de Códigos QR ™ - Aumenta a
							visibilidade da tua marca com cada scan! Se você tem
							um restaurante movimentado e procura modernizar seus
							menus, gerencia um estúdio de fitness que deseja
							simplificar a compra de lanches, ou é um corretor de
							imóveis que fornece acesso instantâneo a detalhes de
							propriedades e tours virtuais - nosso Gerador de
							Códigos QR é projetado para mais de 1000 indústrias
							e todos os tipos de casos de uso.
						</Typography>
					</Box>

					<Box component="img" src={QrCodeImg} />

					<Typography
						component="h1"
						variant="h4"
						sx={{
							fontSize: '1.1rem',
							fontWeight: 700,
							pl: 30,
							pr: 30,
						}}
					>
						Materiais de Marketing:{' '}
						<span style={{ fontWeight: 400 }}>
							Amplia teu alcance incorporando códigos QR em
							materiais promocionais, como panfletos, cartões de
							visita e banners - impulsionando o engajamento e
							garantindo que teu público permaneça conectado.
						</span>
					</Typography>

					<Typography
						component="h1"
						variant="h4"
						sx={{
							fontSize: '1.1rem',
							fontWeight: 700,
							pl: 30,
							pr: 30,
						}}
					>
						Menus e Serviços:{' '}
						<span style={{ fontWeight: 400 }}>
							Para restaurantes, spas e centros de serviços -
							transforme seus menus impressos em portais digitais
							com ofertas e promoções atualizadas.
						</span>
					</Typography>

					<Typography
						component="h1"
						variant="h4"
						sx={{
							fontSize: '1.1rem',
							fontWeight: 700,
							pl: 30,
							pr: 30,
						}}
					>
						Ponto de Venda:{' '}
						<span style={{ fontWeight: 400 }}>
							Melhora a experiência de compra no varejo ou
							facilita os pagamentos em cafés e eventos pop-up com
							um escaneamento rápido.
						</span>
					</Typography>

					<Typography
						component="h1"
						variant="h4"
						sx={{
							fontSize: '1.1rem',
							fontWeight: 700,
							pl: 30,
							pr: 30,
						}}
					>
						Engajamento em eventos:{' '}
						<span style={{ fontWeight: 400 }}>
							Aumenta o engajamento dos participantes em
							conferências ou workshops, ligando a horários,
							biografias de palestrantes ou formulários de
							feedback.{' '}
						</span>
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};
