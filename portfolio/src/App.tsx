import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { Navigator } from './app/Navigator';
import { Header } from './app/Header';
import React from 'react';

const root = createRoot(document.querySelector('.root')!);
root.render(
	<React.StrictMode>
		<HashRouter>
      		<Header/>
			<Navigator/>
		</HashRouter>
	</React.StrictMode>
);
