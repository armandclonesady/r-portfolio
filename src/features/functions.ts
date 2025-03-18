import { Experience } from "../data/types";

/*
    Thomas code 
*/
export function capitalize(str: string): string {
	return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
}

export function formatDate(date: Date) {
	if (date.getTime() > Date.now()) {
		return "En cours";
	}
	return capitalize(
		date.toLocaleDateString("fr-FR", {
			year: "numeric",
			month: "long",
		}),
	);
}

export function formatDates(date1: Date, date2: Date): string {
	if (date1.getTime() > Date.now()) {
		return "À venir";
	}
	if (date2.getTime() > Date.now()) {
		return "En cours";
	}
	return `De ${date1.toLocaleDateString("fr-FR", { year: "numeric", month: "long" })} à ${date2.toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}`;
}

export function sortExperiences(list: Experience[]) {
	return list.sort((e1, e2) => {
		if (e1.startDate < e2.startDate) {
			return 1;
		}
		if (e1.startDate > e2.startDate) {
			return -1;
		}
		return 0;
	});
}
