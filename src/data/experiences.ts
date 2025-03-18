import { frameWorks, skills } from "./skills";
import { Experience } from "./types";

export const experiences = {
	MinistereJustice: {
		title: `Stagiaire découverte`,
		description: `Découverte des systèmes d'information et de communication`,
		company: "Ministère de la Justice",
		startDate: new Date(`2019-12`),
		endDate: new Date(`2019-12`),
		technologies: [],
	},
	NTNU: {
		title: "Stage Erasmus C++ ",
		description:
			"Stage Erasmus dans le contexte de ma deuxième année de BUT Informatique",
		company: "NTNU: Norwegian University of Science and Technology",
		startDate: new Date(`2024-04`),
		endDate: new Date(`2024-06`),
		technologies: [skills.Cplusplus, frameWorks.Qt],
	},
	CGI: {
		title: "Stage développeur junior ",
		description:
			"Stage dans le contexte de ma troisième année de BUT Informatique",
		company: "CGI",
		startDate: new Date(`2025-04`),
		endDate: new Date(`2025-08`),
		technologies: [skills.Java, frameWorks.Spring],
	},
	Leclerc: {
		title: "Préparateur de commandes",
		description: "Préparateur de commande",
		company: "E.Leclerc",
		startDate: new Date(`2024-10`),
		endDate: new Date(`2025-04`),
		technologies: [],
	},
} satisfies { [key: string]: Experience };
