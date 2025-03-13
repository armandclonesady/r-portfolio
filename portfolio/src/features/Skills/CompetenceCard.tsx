import { useState } from "react";
import { Skill } from "../../data/types"
import { Badge, Card, Row } from "react-bootstrap";
import { Modal } from "react-bootstrap";

interface CompetenceCardProps {
    competence: Skill;
}

export default function CompetenceCard({ competence }: CompetenceCardProps) {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function DisplayFrameworks() {
        if (competence.frameworks) {
            return (
                <Modal.Body>
                    <h4 className="">Frameworks connus</h4>
                    <Row xs={1} md={2}>
                        {competence.frameworks.map((framework, index) => (
                            <Card bg="light" className="p-3  rounded pe-auto" key={index}>
                                <Card.Img variant="top" src={framework.icon} height={"60dvh"}></Card.Img>
                                <Card.Title className="text-center">{framework.name}</Card.Title>
                            </Card>
                        ))}
                    </Row>
                </Modal.Body>
            )
        }
    } 

    return (
        <>
            <Card bg="light" className="p-3 m-2 rounded pe-auto text-center"  style={{cursor: "pointer"}}onClick={handleShow}>
                <Card.Img variant="top" src={competence.icon} height={"60dvh"}></Card.Img> 
                <Card.Title>{competence.name} {competence.frameworks && <Badge bg="primary" className="m-1">{competence.frameworks.length}</Badge>}</Card.Title>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{competence.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Description</h4>
                    <p>{competence.description}</p>
                    <DisplayFrameworks/>
                </Modal.Body>
            </Modal>
        </>
    )
}