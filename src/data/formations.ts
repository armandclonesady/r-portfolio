import { Experience } from "./types";

export const formations = {
	BAC: {
		title: `BAC Général`,
		description: `BAC Général option Math et NSI, option Européenne Anglais`,
		company: "Lycée Raymond Queneau",
		startDate: new Date(`2020-09`),
		endDate: new Date(`2022-07`),
		technologies: [],
	},
	BUT: {
		title: "BUT Informatique",
		description: "BUT Informatique parcours développement & réalisation",
		company: "IUT A de Lille",
		startDate: new Date(`2022-09`),
		endDate: new Date(`2025-08`),
		technologies: [],
	},
} satisfies { [key: string]: Experience };
