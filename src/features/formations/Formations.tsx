import { Container, Row, Col } from "react-bootstrap";
import ExperienceTimeline from "../experiences/ExperienceTimeline";
import { Experience } from "../../data/types";
import { formations } from "../../data/formations";

export default function Formations() {
	const formationList = Object.values(formations) as Experience[];
	return (
		<Container className="mt-3 bg-light p-5 rounded">
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
				<ExperienceTimeline experiences={formationList} />
			</Row>
		</Container>
	);
}
