import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Conceitual } from '../../pages/Conceitual';
import { Portfolio } from '../../pages/Portfolio';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/conceitual-proposta-462"
					element={<Conceitual />}
				/>
				<Route path="/portfolio" element={<Portfolio />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
