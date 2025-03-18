import { Experience } from "./types";

export const experiences = {
    MinistereJustice: {
        title: `Stagiaire découverte 3eme`,
        description: ``,
        company: "Ministère de la Justice",
        startDate: new Date(`2019-12`),
        endDate: new Date(`2019-12`),
        technologies: []
    }
} satisfies { [key: string]: Experience };