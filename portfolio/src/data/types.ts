export type Skill = {
    icon: string,
    name: string,
    description: string | null
    frameworks?: Skill[]
}

export type Experience = {
    title: string,
    description: string,
    company: string,
    startDate: string,
    endDate: string
}

export type Project = {
    name: string,
    logo: string,
    description: string,
    date: string,
    link: string,
    technologies: Skill[]
}