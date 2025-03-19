import { Experience } from "./types";
import queneau from "../assets/formations/queneau.png";
import iut from "../assets/formations/univ-lille.png";

export const formations = {
	BAC: {
		title: `BAC Général`,
		description: `BAC Général option Math et NSI, option Européenne Anglais`,
		company: "Lycée Raymond Queneau",
		startDate: new Date(`2020-09`),
		endDate: new Date(`2022-07`),
		technologies: [],
		icon: queneau
	},
	BUT: {
		title: "BUT Informatique",
		description: "BUT Informatique parcours développement & réalisation",
		company: "IUT A de Lille",
		startDate: new Date(`2022-09`),
		endDate: new Date(`2025-08`),
		technologies: [],
		icon: iut
	},
} satisfies { [key: string]: Experience };
