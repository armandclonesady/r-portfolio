import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import "../../css/contact.css";
import CV from "../assets/Armand CV Stage Février 2025.jpg";
import CV_PDF from "../assets/Armand CV Stage Février 2025.pdf";

export function Contact() {
	function handleCVClick(e: React.MouseEvent<HTMLImageElement>) {
		e.preventDefault();
		window.open(CV_PDF, "_blank");
	}

	return (
		<>
			<Container className="mt-5 bg-light p-5 rounded">
				<Row>
					<Col>
						<h1>Contact</h1>
					</Col>
				</Row>
			</Container>
			<Container className="mt-5 bg-light p-5 rounded">
				<Row>
					<Col>
						{/*
                    phone icon
                    */}
						<h2>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								className="bi bi-telephone"
								viewBox="0 0 20 20"
							>
								<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
							</svg>
							Téléphone
						</h2>
						<br />
						<Col>
							<p>(+33) 782926087</p>
						</Col>
					</Col>
					<Col>
						{/*
                    email icon
                    */}
						<h2>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								className="bi bi-telephone"
								viewBox="0 0 20 20"
							>
								<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
							</svg>
							Email
						</h2>
						<br />
						<Col>
							<p>
								armand.sady@gmail.com <br />
								armand.sady.etu@univ-lille.fr
							</p>
						</Col>
					</Col>
					<Col>
						{/*
                    linkedin icon
                    */}
						<h2>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								className="bi bi-telephone"
								viewBox="0 0 20 20"
							>
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
							</svg>
							LinkedIn
						</h2>
						<br />
						<Col>
							<p>
								<a
									href="https://www.linkedin.com/in/armand-sady-368992274//"
									className="text-decoration-none"
								>
									Mon profil LinkedIn
								</a>
							</p>
						</Col>
					</Col>
				</Row>
			</Container>
			<Container className="p-5 rounded text-center">
				<Row>
					<Col>
						{" "}
						<img
							src={CV}
							alt="CV"
							style={{ width: "33dvw" }}
							onClick={handleCVClick}
						/>{" "}
					</Col>
				</Row>
			</Container>
		</>
	);
}
