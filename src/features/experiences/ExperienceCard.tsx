import { Badge, Button, Modal } from "react-bootstrap";
import { Experience } from "../../data/types";
import { useState } from "react";
import { formatDate, formatDates } from "../functions";
import { skills } from "../../data/skills";
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
					<h3>Entreprise - {experience.company}</h3>
					<Badge bg="secondary">
						{formatDates(experience.startDate, experience.endDate)}
					</Badge>
					<h4>Description </h4>
					<p>{experience.description}</p>
					<Frameworks />
				</Modal.Body>
			</Modal>
		</>
	);
}
