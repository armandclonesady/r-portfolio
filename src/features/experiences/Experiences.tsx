import { Container, Row, Col } from "react-bootstrap";
import ExperienceTimeline from "./ExperienceTimeline";
import { experiences } from "../../data/experiences";
import { Experience } from "../../data/types";

export default function Experiences() {
	const experienceList = Object.values(experiences) as Experience[];
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
				<ExperienceTimeline experiences={experienceList} />
			</Row>
		</Container>
	);
}
