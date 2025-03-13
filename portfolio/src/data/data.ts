import { Language, Skill } from "./types";


export const frameWorks: { [key: string]: Skill } = {
    React: {
        name: `React`,
        description: `Bibliothèque JS/TS utilisé afin de construire des interfaces utilisateur et des applications web monopages, appris durant mes études et que j'apprécie énormément utiliser.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    VueJS: {
        name: `VueJS`,
        description: `Framework JS/TS utilisé afin de construire des interfaces utilisateur et des applications web monopages, appris sur mon temps libre en Norvège.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
    },
    NestJS: {
        name: `NestJS`,
        description: `Framework TS côté server, appris sur mon temps libre en Norvège.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
    },
    NodeJS: {
        name: `NodeJS`,
        description: `Framework JS utilisé afin de créer des serveurs web, appris durant mes études.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
    },
    Spring: {
        name: `Spring`,
        description: `Framework Java, appris durant mes études.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
    },
    Express: {
        name: `Express`,
        description: `Framework JS, appris durant mes études.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
    },
    Bootstrap: {
        name: `Bootstrap`,
        description: `Framework CSS.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
    },
    Qt: {
        name: `Qt`,
        description: `Framework C++, appris durant mon stage de 2eme année de BUT Informatique.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg"
    }
};

export const skills: Skill[] = [
    {
        name: `Java`,
        description: `Langage de programmation orienté objet, étudié durant mes cours universitaires, langage avec lequel j'ai le plus d'expérience.`,
        frameworks: [frameWorks.Spring],
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    {
        name: `C`,
        description: `Langage de programmation impératif, étudié durant mes cours universitaires.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
    },
    {
        name: `C++`,
        description: `Langage de programmation orienté objet, appris dans le cadre de mon stage de 2eme année de BUT Informatique.`,
        frameworks: [frameWorks.Qt],
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
    },
    {
        name: `Python`,
        description: `Langage de programmation interprété, étudié durant mes cours universitaires.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
        name: `HTML, CSS`,
        description: `Langages de programmation utilisé dans le développement de sites web front-end, appris durant mes études, langages que j'apprécie.`,
        frameworks: [frameWorks.Bootstrap],
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
        name: `JavaScript`,
        description: `Langage de programmation interprété, utilisé dans le développement de sites web front-end, appris durant mes études et que j'apprécie.`,
        frameworks: [frameWorks.React, frameWorks.VueJS, frameWorks.NodeJS, frameWorks.Express],
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
        name: `TypeScript`,
        description: `Langage de programmation typé, utilisé dans le développement de sites web front-end, appris durant mes études et que j'apprécie énormément utiliser.`,
        frameworks: [frameWorks.React, frameWorks.VueJS, frameWorks.NestJS],
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    }
];

export const databases: Skill[] = [
    {
        name: `PostgreSQL`,
        description: `Base de données SQL, appris durant mes études. C'est la base de données que j'utilise le plus, et avec laquelle je suis la plus à l'aise.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
    },
    {
        name: `MongoDB`,
        description: `Base de données NoSQL, appris durant mes études.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    },
    {
        name: `Redis`,
        description: `Base de données NoSQL, appris durant mes études.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
    },
    {
        name: `Cassandra`,
        description: `Base de données NoSQL, appris durant mes études.`,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-original.svg"
    }
]

export const languages: Skill[] = [
    {
        name: `Français`,
        description: `Langue maternelle`,
        icon: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/flags/4x3/fr.svg"
    },
    {
        name: `Anglais`,
        description: `Niveau C2 990/990 au TOEIC`,
        icon: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/flags/4x3/gb.svg"
    },
    {
        name: `Allemand`,
        description: `Niveau scolaire`,
        icon: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/flags/4x3/de.svg"
    }


]