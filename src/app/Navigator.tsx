import { Route, Routes } from "react-router";
import { Contact } from "../features/Contact";
import { Projects } from "../features/projets/Projects";
import { About } from "../features/About";
import { routes } from "../routes";
import Formations from "../features/formations/Formations";
import Experiences from "../features/experiences/Experiences";
import Competences from "../features/Skills/Competences";

export function Navigator() {
	return (
		<Routes>
			<Route path={`${routes.Home}`} element={<About />} />
			<Route path={`${routes.Formations}`} element={<Formations />} />
			<Route path={`${routes.Competences}`} element={<Competences />} />
			<Route path={`${routes.Experiences}`} element={<Experiences />} />
			<Route path={`${routes.Projets}`} element={<Projects />} />
			<Route path={`${routes.Contact}`} element={<Contact />} />
		</Routes>
	);
}
