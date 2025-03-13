import { Row } from "react-bootstrap";
import { frameWorks, skills } from "../../data/data";
import CompetenceCard from "./CompetenceCard";
import FrameworkCard from "./FrameworkCard";

export default function CompetencesList() {
    return (
        <>
            <Row className="mb-5">
                <h2>Langages</h2>
                <p>
                    Appuyez sur un langage pour plus d'informations, et les framework connus!
                </p>
            </Row>
            <Row xs={1} md={5} className="g-4">
                    {skills.map((skill, index) => (
                        <CompetenceCard key={index} competence={skill} />
                    ))}
            </Row>
            
            <Row className="mb-5">
                <h2>Framework</h2>
                <p>
                    Appuyez sur une compétence pour plus d'informations et le langage associé!
                </p>
            </Row>
            <Row xs={1} md={5} className="g-4">
                {Object.keys(frameWorks).map((framework, index) => (
                    <FrameworkCard key={index} framework={frameWorks[framework]} />
                ))}
            </Row>
        </>
    )
}