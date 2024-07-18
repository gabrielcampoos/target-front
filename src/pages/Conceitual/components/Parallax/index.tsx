import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import './styles.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import BgKitchen from '../../../../assets/images/bg-cozinha.jpg';
import Logo from '../../../../assets/images/logoConceitual-2.png';
import { ParallaxSm } from './ParallaxSm';

export const Parallax = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.zoomText', {
			transform: 'scaleY(100) scaleX(100)',
			transition: 'all 0.5s ease-out',
			display: 'none',
			scrollTrigger: {
				trigger: '.zoomText',
				// markers: true,
				start: 'top 30px',
				end: 'bottom 20px',
				scrub: true,
			},
		});

		return () => {
			gsap.killTweensOf('.zoomText');
		};
	}, []);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.zoomImage', {
			width: '100%',
			height: '100%',
			transition: 'all 0.5s ease-out',
			scrollTrigger: {
				trigger: '.zoomImage',
				// markers: true,
				start: 'top 5000px',
				end: 'bottom 1000px',
				scrub: true,
			},
		});

		return () => {
			gsap.killTweensOf('.zoomImage');
		};
	}, []);

	return (
		<>
			{(smDown && (
				<>
					<ParallaxSm />
				</>
			)) || (
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
							// className="zoomText"
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
									fontSize: '12rem',
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
							// className="zoomImage"
							sx={{
								width: '10%',
								height: '10%',
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
								<Box component="img" src={Logo} />
							</Box>
						</Box>
					</Box>
				</>
			)}
		</>
	);
};
