import { Box, Typography } from '@mui/material';
import '../styles.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import BgKitchen from '../../../../../assets/images/bg-cozinha.jpg';
import Logo from '../../../../../assets/images/logoConceitual-2.png';

export const ParallaxSm = () => {
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.zoomTextSm', {
			transform: 'scaleY(30) scaleX(30)',
			transition: 'all 0.5s ease-out',
			display: 'none',
			overflow: 'hidden',
			scrollTrigger: {
				trigger: '.zoomTextSm',
				// markers: true,
				start: 'top 600px',
				end: 'bottom 400px',
				scrub: true,
			},
		});

		return () => {
			gsap.killTweensOf('.zoomTextSm');
		};
	}, []);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.zoomImageSm', {
			width: '100%',
			height: '100%',
			transition: 'all 0.5s ease-out',
			scrollTrigger: {
				trigger: '.zoomImageSm',
				// markers: true,
				start: 'top 1000px',
				end: 'bottom 900px',
				scrub: true,
			},
		});

		return () => {
			gsap.killTweensOf('.zoomImageSm');
		};
	}, []);

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
				}}
			>
				<Box
					component="div"
					className="zoomTextSm"
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						background: `url(${BgKitchen})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						position: 'absolute',
						backgroundClip: 'text',
						WebkitBackgroundClip: 'text',
						color: 'transparent',
						zIndex: 2,
						animationDelay: '2s',
					}}
				>
					<Typography
						sx={{
							fontSize: '6rem',
							WebkitTextFillColor: 'transparent',
							WebkitTextStrokeColor: '#fff',
							WebkitTextStrokeWidth: '2px',
							fontWeight: 700,
						}}
					>
						LIVE
						<br />
						YOUR
						<br />
						DREAM
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
				}}
			>
				<Box
					component="div"
					className="zoomImageSm"
					sx={{
						width: '100%',
						height: '100%',
						background: `url(${BgKitchen})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						position: 'absolute',
						zIndex: 1,
					}}
				>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							opacity: 0.5,
						}}
					>
						<Box
							component="img"
							src={Logo}
							sx={{
								width: '100%',
							}}
						/>
					</Box>
				</Box>
			</Box>
		</>
	);
};
