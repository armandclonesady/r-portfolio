import { Accordion, Container, Col, Row } from "react-bootstrap";
import { projects } from "../../data/projects";
import { Project } from "../../data/types";
import CompetenceCard from "../Skills/CompetenceCard";
import { formatDate } from "../functions";

export default function ProjectsList() {
	const projectList = Object.values(projects) as Project[];

	function DateCard(project: Project) {
		if (project.endDate.getTime() > Date.now()) {
			return (
				<Col className="bg-warning rounded-pill m-3 p-3 text-center">
					<p>Projet en cours!</p>
				</Col>
			);
		}
		if (project.startDate.getTime() === project.endDate.getTime()) {
			return (
				<Col className="bg-info rounded m-3 p-3 text-center">
					<p>Date - {formatDate(project.startDate)}</p>
				</Col>
			);
		}
		return (
			<Col className="bg-info rounded m-3 p-3 text-center">
				<p>Début - {formatDate(project.startDate)}</p>
				<p>Fin - {formatDate(project.endDate)}</p>
			</Col>
		);
	}

	function LinkToProject(project: Project) {
		if (project.link) {
			return (
				<h4>
					{" "}
					<a href={project.link} target="_blank" rel="noreferrer">
						{" "}
						Lien du projet{" "}
					</a>{" "}
				</h4>
			);
		}
	}

	return (
		<>
			<Accordion alwaysOpen defaultActiveKey={["1"]}>
				{projectList.map((project, index) => (
					<Accordion.Item key={index} eventKey={index.toString()}>
						<Accordion.Header>{project.name}</Accordion.Header>
						<Accordion.Body>
							<Container>
								<Row>
									<h2>{project.name}</h2>
								</Row>
								<Row className="m-3">
									<p>{project.description}</p>
								</Row>
								<Row>
									<DateCard {...project} />
								</Row>
								<Row>
									<h4> Compétences utilisées </h4>
								</Row>
								<Row xs={3}>
									{project.technologies.map(
										(skill, index) => (
											<Col>
												<CompetenceCard
													key={index}
													competence={skill}
												/>
											</Col>
										),
									)}
								</Row>
								<LinkToProject {...project} />
							</Container>
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		</>
	);
}
