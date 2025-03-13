import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { Navigator } from './app/Navigator';
import { Header } from './app/Header';
import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const root = createRoot(document.querySelector('.root')!);

if (!window.location.hash) {
	window.location.replace(window.location.href + "#/r-portfolio/");
}

root.render(
	<React.StrictMode>
		<HashRouter>
      		<Header/>
			<Navigator/>
		</HashRouter>
	</React.StrictMode>
);
