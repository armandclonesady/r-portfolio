import { useState } from "react";
import { Skill } from "../../data/types";
import { Card, Modal } from "react-bootstrap";


interface FrameworkCardProps {
    framework: Skill;
}

export default function FrameworkCard({ framework }: FrameworkCardProps) {
    
    const [show, setShow] = useState(false);
        
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card bg="light" className="p-3 m-2 rounded pe-auto text-center" style={{cursor: "pointer"}} onClick={handleShow}>
                <Card.Img variant="top" src={framework.icon} height={"60dvh"}></Card.Img>
                <Card.Title>{framework.name}</Card.Title>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton> {framework.name} </Modal.Header>
                <Modal.Body>
                    <h4>Description</h4>
                    <p>{framework.description}</p>
                </Modal.Body>
            </Modal>

        </>
    )
}