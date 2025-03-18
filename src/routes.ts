const routePrefix = "r-portfolio";

export const routes = {
	Home: `${routePrefix}/`,
	Formations: `${routePrefix}/formations`,
	Competences: `${routePrefix}/competences`,
	Experiences: `${routePrefix}/experiences`,
	Projets: `${routePrefix}/projects`,
	Contact: `${routePrefix}/contact`,
};

// export const getNextRoute (route: string) {
//     const keys = Object.keys(routes)
//     const index = keys.indexOf(route)
//     return keys[(index + 1) % keys.length]
// }

// export const getPreviousRoute (route: string) {
//     const keys = Object.keys(routes)
//     const index = keys.indexOf(route)
//     return keys[(index - 1) % keys.length]
// }
