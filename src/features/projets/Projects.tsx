import { Container, Row } from "react-bootstrap";
import ProjectsList from "./ProjectsList";

export function Projects() {
	return (
		<Container className="mt-5 bg-light p-5 rounded">
			<Row>
				<h1>Projets</h1>
			</Row>
			<Row>
				<p>
					Voici une liste des différents projets universitaires et
					personnels que j'ai eu l'occasion de faire au cours de mes
					études:
				</p>
			</Row>
			<ProjectsList />
		</Container>
	);
}
