import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Navigator } from './app/Navigator';
import { Header } from './app/Header';

const root = createRoot(document.querySelector('.root')!);
root.render(
		<BrowserRouter>
      		<Header/>
			<Navigator/>
		</BrowserRouter>
);
