import { Box, Grid, Typography } from '@mui/material';

import BgConceitual from '../../../../assets/images/bg-conceitual.jpg';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ConceitualAnimation = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	const textY = useTransform(scrollYProgress, [0, 1], ['500%', '7000%']);

	return (
		<Box
			ref={ref}
			sx={{
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<motion.h1
				style={{
					scaleY: textY,
					scaleX: textY,
					// y: textY,
					fontWeight: 700,
					position: 'relative',
					zIndex: 10,
				}}
			>
				PARALLAX
			</motion.h1>

			<motion.div
				style={{
					y: backgroundY,
					position: 'absolute',
					inset: 0,
					zIndex: 0,
					backgroundImage: `url(${'https://www.petz.com.br/blog//wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-1.jpg'})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
			></motion.div>
		</Box>
	);
};
