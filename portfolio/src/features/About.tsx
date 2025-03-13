import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router";

export function About() {
    return (
        <>
        <Container className="mt-5 bg-light p-5 rounded">
            <Row >
                <Col>
                    <h1>À propos de moi</h1>
                </Col>
            </Row>
            <br /> <br />
            <Row>
                <Col>
                    <p>
                        Je m'appelle Armand Sady, je suis actuellement en <strong>3eme année de BUT Informatique a l'Université de Lille</strong>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        <strong>Passioné d'informatique</strong> et des jeux videos depuis l'enfance, je me suis enfin orienté vers l'informatique au lycée avec l'option SI en seconde, et plus profondément avec l'option NSI et ensuite la formation du BUT Informatique de Lille.
                        Ayant choisi le parcours <strong>Réalisation d'Application</strong>, ma formation est accès sur le développement pur, en utilisant principalement le Java, tout en nous apprennant différents autres languages.
                        Je suis actuellement <strong>à la recherche d'un stage pour de 10 semaines minimum pour Mars 2025</strong>.
                        J'aimerais continuer ma formation après le BUT afin <strong>d'obtenir un Master</strong>.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        J'ai eu l'occasion de réalisé beaucoup de projet au cours de ma formation, et j'ai acquis aussi des compétences en informatiques qui sont visible sur ce portfolio.
                        Vous pouvez scroll afin de changer de page et voir mes compétences, mes expériences, mes formations, mes projets et mes contacts.
                        Vous pouvez voir une version clonée depuis mon gitlab universitaire de mes projets sur mon gitlab!
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Vous pouvez voir une version clonée depuis mon gitlab universitaire de mes projets sur mon gitlab!
                    </p>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col align="center" className="m-3 bg-light rounded">
                    <NavLink to="formations" className={"text-decoration-none"}> <h3> Formations </h3> </NavLink>
                </Col>

                <Col align="center" className="m-3 bg-light rounded">
                <NavLink to="competences" className={"text-decoration-none"}> <h3> Compétences </h3> </NavLink>
                </Col>

                <Col align="center" className="m-3 bg-light rounded">
                <NavLink to="experiences" className={"text-decoration-none"}> <h3> Expériences </h3> </NavLink>
                </Col>
            </Row>
        </Container>
        </>
    )
}