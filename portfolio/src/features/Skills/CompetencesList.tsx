import { Accordion, Row } from "react-bootstrap";
import { frameWorks, skills, languages, databases } from "../../data/skills";
import { Skill } from "../../data/types";
import CompetenceCard from "./CompetenceCard";

export default function CompetencesList() {

    const skillList = Object.values(skills) as Skill[];
    const frameWorkList = Object.values(frameWorks) as Skill[];
    const databaseList = Object.values(databases) as Skill[];
    const languageList = Object.values(languages) as Skill[];

    return (
        <>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Langages de programmation</Accordion.Header>
                    <Accordion.Body>
                        <h2>Langages</h2>
                        <p>
                            Appuyez sur un langage pour plus d'informations, et les framework connus!
                        </p>
                        <Row xs={1} md={5} className="g-4">
                            {skillList.map((skill, index) => (
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
                            {frameWorkList.map((framework, index) => (
                                    <CompetenceCard key={index} competence={framework} />
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
                            {databaseList.map((database, index) => (
                                <CompetenceCard key={index} competence={database} />
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
                            {languageList.map((language, index) => (
                                <CompetenceCard key={index} competence={language} />
                            ))}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}