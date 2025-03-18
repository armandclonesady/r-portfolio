import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router";
import { routes } from "../routes";

export function Header() {
	function fillRoutes() {
		return (Object.keys(routes) as Array<keyof typeof routes>).map(
			(key) => {
				if (key.toLowerCase() !== "home") {
					return (
						<Nav.Link key={key} as={NavLink} to={routes[key]}>
							{key}
						</Nav.Link>
					);
				}
			},
		);
	}

	return (
		<Navbar expand="md" bg="dark" variant="dark" fixed="top">
			<Container>
				{/* <Nav.Link as={NavLink} to={routes.home} className="navbar-brand">Home</Nav.Link> */}
				<Navbar.Brand as={NavLink} to={routes.Home}>
					Armand SADY
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>{fillRoutes()}</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
