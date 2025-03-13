import { Container, Row, CardGroup } from "react-bootstrap";
import { skills } from "../../data/data";
import CompetenceCard from "./CompetenceCard";

export default function CompetencesList() {
    return (
        <Container className="mt-5 p-5 rounded bg-light">
            <Row className="mb-5">
                <h1>Langages</h1>
            </Row>
            <Row xs={1} md={5} className="g-4">
                    {skills.map((skill, index) => (
                        <CompetenceCard key={index} competence={skill} />
                    ))}
            </Row>
        </Container>
    )
}