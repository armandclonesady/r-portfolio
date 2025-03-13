import { Container, Row } from "react-bootstrap";
import CompetencesList from "./CompetencesList";

export default function Competences() {
    return (
        <>
            <Container className="mt-5 bg-light p-5 rounded">
                <Row>
                    <h1>Competences</h1>
                </Row>
                <Row>
                    <p>
                        Voici une liste des compétences que j'ai acquises durant mes études et mes expériences professionnelles.
                    </p>
                </Row>
                <CompetencesList />
            </Container>
        </>
    )
}