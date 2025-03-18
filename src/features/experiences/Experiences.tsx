import { Container, Row, Col } from "react-bootstrap";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experiences() {
	return (
		<Container className="mt-5 bg-light p-5 rounded">
			<Row>
				<Col>
					<h1>Experiences</h1>
					<p>
						Voici une liste des différentes expériences
						professionnelles que j'ai pu faire au cours de ma
						carrière.
					</p>
				</Col>
			</Row>
			<Row>
				<ExperienceTimeline />
			</Row>
		</Container>
	);
}
