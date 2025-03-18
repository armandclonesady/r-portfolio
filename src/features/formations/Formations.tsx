import { Container, Row, Col } from "react-bootstrap";
import FormationTimeline from "./FormationTimeline";

export default function Formations() {
	return (
		<Container className="mt-5 bg-light p-5 rounded">
			<Row>
				<Col>
					<h1>Formations</h1>
					<p>
						Voici une liste des formations que j'ai eu l'occasion de
						faire durant mon parcours
					</p>
				</Col>
			</Row>
			<Row>
				<FormationTimeline />
			</Row>
		</Container>
	);
}
