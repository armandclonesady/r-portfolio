import { Badge, Button, Col, Modal, Row, Image } from "react-bootstrap";
import { Experience } from "../../data/types";
import { useState } from "react";
import { formatDates } from "../functions";
import CompetenceCard from "../Skills/CompetenceCard";

interface ExperienceCardProps {
	experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function Frameworks() {
		if (experience.technologies && experience.technologies.length == 0) {
			return <> </>;
		} else {
			return (
				<>
					<h4> Technologies </h4>
					{experience.technologies.map((skill, index) => (
						<CompetenceCard key={index} competence={skill} />
					))}
				</>
			);
		}
	}

	function ExperienceImage() {
		if (experience.icon) {
			return (	
				<Image style={{maxHeight: "10dvh"}} src={experience.icon} alt={experience.title} rounded fluid/>
			);
		} else {
			return <></>;
		}
	}

	function TitleCard() {
		if (experience.icon) {
			return (
			<Row>
						<Col md={8}>
							<Badge bg="secondary">
								{formatDates(experience.startDate, experience.endDate)}
							</Badge>
							<h3>Entreprise - {experience.company}</h3>
						</Col>
						<Col>
							<ExperienceImage/>
						</Col>
					</Row>	
				)
		} else {
			return (
				<Row>
						<Col>
							<Badge bg="secondary">
								{formatDates(experience.startDate, experience.endDate)}
							</Badge>
							<h3>Entreprise - {experience.company}</h3>
						</Col>
					</Row>
			)
		}
	}

	return (
		<>
			<Button
				variant="outline-primary"
				onClick={handleShow}
				style={{ cursor: "pointer" }}
			>
				<h4> {experience.title} </h4>
				{experience.company}
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{experience.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<TitleCard/>
					<h4>Description </h4>
					<p>{experience.description}</p>
					<Frameworks />
				</Modal.Body>
			</Modal>
		</>
	);
}
