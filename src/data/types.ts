export type Skill = {
	icon: string;
	name: string;
	description: string | null;
	frameworks?: Skill[];
};

export type Experience = {
	title: string;
	description: string;
	company: string;
	startDate: Date;
	endDate: Date;
	technologies: Skill[];
};

export type Project = {
	name: string;
	logo: string;
	description: string;
	startDate: Date;
	endDate: Date;
	link: string;
	technologies: Skill[];
};
