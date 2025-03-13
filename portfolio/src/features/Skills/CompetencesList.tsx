import { Accordion, Row } from "react-bootstrap";
import { frameWorks, skills, languages, databases } from "../../data/data";
import CompetenceCard from "./CompetenceCard";

export default function CompetencesList() {
    return (
        <>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Langages</Accordion.Header>
                    <Accordion.Body>
                        <h2>Langages</h2>
                        <p>
                            Appuyez sur un langage pour plus d'informations, et les framework connus!
                        </p>
                        <Row xs={1} md={5} className="g-4">
                            {skills.map((skill, index) => (
                                <CompetenceCard key={index} competence={skill} />
                            ))}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Framework</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                        <h2>Framework</h2>
                        <p>
                            Appuyez sur un framework pour plus d'informations!
                        </p>
                        </Row>
                         <Row xs={1} md={5} className="g-4">
                              {Object.keys(frameWorks).map((framework, index) => (
                                 <CompetenceCard key={index} competence={frameWorks[framework]} />
                                 ))}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Bases de Données</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                        <h2>Bases de données</h2>
                        <p></p>
                        </Row>
                         <Row xs={1} md={5} className="g-4">
                         {databases.map((skill, index) => (
                                <CompetenceCard key={index} competence={skill} />
                            ))}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Langues</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                        <h2>Langues</h2>
                        <p>
                            Appuyez sur une langue pour voir le niveau!
                        </p>
                        </Row>
                         <Row xs={1} md={5} className="g-4">
                         {languages.map((skill, index) => (
                                <CompetenceCard key={index} competence={skill} />
                            ))}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}