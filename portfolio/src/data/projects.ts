import { Project } from "./types";
import {skills, frameWorks, databases } from "./skills";

export const projects: { [key: string]: Project } = {
    Calendar: {
        name: `Calendrier de gestion de rendez-vous`,
        logo: ``,
        description: `Ce projet, réalisé en binôme, était un calendrier de gestion de rendez-vous. Il a prit la forme d'un site web permettant de prendre des rendez-vous sur un calendrier, avec un systeme de comptes, de gestion de rendez-vous et permettait a l'administrateur de tous modifier au sujet du projet. Ce projet fut fait en Java avec Spring, avec une base de donnée H2 pour stocker les informations. Ce projet m'a permit de mettre en pratiques tous ce que j'avais appris avec Spring, en particulier Spring Security et Spring Data JPA`,
        startDate: new Date(`2024-09`),
        endDate: new Date(`2025-01`),
        link: "",
        technologies: [skills.Java, frameWorks.Spring]
    },
    Clonify: {
        name: `Clonify`,
        logo: ``,
        description: `Clonify est une plateforme web qui utilise l'API Spotify. Ce projet a été développé en utilisant TypeScript, VueJS et NestJS pour offrir une expérience utilisateur fluide et rapide. Il permet aux utilisateurs de naviguer les differents artistes, leurs musiques, album et les playlist des utilisateurs Spotify. "Ce projet personnel fut développé dans le seul but d'apprendre le TypeScript et le VueJS, afin d'apprendre plus de framework JS/TS, car ce sont deux languages que j'affectionne particulièrement. Bien que le code NestJS n'est désormais plus présent, j'ai eu l'occasion d'en apprendre plus sur le NestJS grâce a ce projet.`,
        startDate: new Date(`2024-05`),
        endDate: new Date(`2024-06`),
        link: "https://github.com/armandclonesady/spotify-project",
        technologies: [skills.TS, frameWorks.VueJS, frameWorks.NestJS],
    },
    Steredeux: {
        name: `Steredeux`,
        logo: ``,
        description: "Ce projet, fait en binôme, est un jeu de tir de type \"Shoot 'em up\" jouable en multijoueur depuis le navigateur. Le but du jeu étant de survivre le plus longtemps contre des vagues de vaisseaux ennemies. Lors de ce projet, j'ai eu l'occasion d'apprendre bien plus profondément comment le JS fonctionne, ainsi que d'apprendre a utiliser JQuery & NodeJS, le premier pour plus facilement géré le frontside et le second pour géré le serveur qui tourne derrière.",
        startDate: new Date(`2024-2`),
        endDate: new Date(`2024-4`),
        link: "https://github.com/armandclonesady/jsae",
        technologies: [skills.JS, frameWorks.NodeJS, frameWorks.HTML_CSS],
    },
    API_Pizza: {
        name: `API Pizza`,
        logo: ``,
        description: `Ce projet nous demandait de créer une API Rest en Java en groupe de 2 étudiants. Nous avons donc créé premièrement une base de donnée sous PostgreSQL, puis une API permettant de faire des requêtes sur cette base de donnée. Dans ce but, nous avons utilisé des Servlet ainsi que le logiciel Bruno afin de tester les requêtes que notre API permettait de faire.Lors de ce projet, j'ai eu l'occasion d'en apprendre plus sur comment créer une API, ainsi que les Servlet en Java.`,
        startDate: new Date(`2024-2`),
        endDate: new Date(`2024-3`),
        link: "https://github.com/armandclonesady/api-pizza",
        technologies: [skills.Java, databases.Postgres],
    },
    Chasse_Aux_Monstres: {
        name: `Chasse aux monstres`,
        logo: ``,
        description: `"Ce jeu, fait en équipes de 4 lors du premier semestre de la seconde année de BUT Informatique, était un jeu dans lequel jusqu'à deux joueurs pouvaient s'affronter. Où un joueur étais le monstre et l'autre le chasseur. Le monstre se déplace dans un labyrinthe généré automatiquement, et le chasseur doit lui tirer dessus avant que le monstre ne trouve la sortie du labyrinthe. Lors de ce projet j'ai eu l'occasion de travailler en équipe, d'approfondir mes conaissances en JavaFX, ainsi que d'appliquer le modèle MVC ainsi que d'autres patrons de conception tel que la Factory. J'ai aussi eu l'occasion d'apprendre de nouveaux algorithmes tels que A* pour l'IA du monstre & l'algorithme de Prim pour la génération du labyrinthe.`,
        startDate: new Date(`2023-04`),
        endDate: new Date(`2023-06`),
        link: "https://github.com/armandclonesady/voyage-etranger",
        technologies: [skills.Java, frameWorks.JavaFX]
    },
    JO: {
        name: `JO Analyse statistique`,
        logo: ``,
        description: `Ce projet, fait en bînomes, était un peu différent des autres, car la partie informatique, bien que présente, n'était pas la plus importante.Cette dernière consistait a créer une base de donnée sous SQLa partir d'une liste de tous les participants aux JO depuis leur première éditions modernes a 2016.La plus grande partie était l'analyse statistique des données, et la création de graphiques pour les présenter. Lors de ce projet j'ai eu l'occasion de partir de 0 et de créer une base de donnée simple a naviguer, ainsi que de travailler avec des données réelles, de les analyser et de les présenter de manière claire et concise.`,
        startDate: new Date(`2023-09`),
        endDate: new Date(`2024-01`),
        link: "https://github.com/armandclonesady/chasse-au-monstre",
        technologies: [databases.Postgres]
    },
    Voyage_Etranger: {
        name: `Voyage à l'étranger`,
        logo: ``,
        description: `Application sous JavaFX permettant de gérer la consistution de bînomes d'élèves selon leurs préférances pour des échanges scolaire. Ce projet a été réalisé en groupe de 3 étudiants lors de ma première année a l'IUT, et été un bon moyen de travailler avec JavaFX et en groupe. Lors de ce projet j'ai eu l'occasion de travailler en groupe, de développé mes connaissances en JavaFX ainsi qu'en Java. Les algorithmes de recherches tel que Dijkstra ont été utilisé pour la recherche des bînomes.`,
        startDate: new Date(`2023-04`),
        endDate: new Date(`2023-06`),
        link: "https://github.com/armandclonesady/voyage-etranger",
        technologies: [skills.Java, frameWorks.JavaFX]
    },
    As_Du_Crous: {
        name: `As du Crous`,
        logo: ``,
        description: `Jeu développé en java sur 3 jours en groupe de 5 étudiants. Ce projet consistait a la création d'un jeu se jouait uniquement sur le terminal de la machine, mais le contenu du jeu était secondaire a la méthode agile SCRUM que nous avons appris. Lors de ce projet j'ai eu l'occasion de travailler en équipe avec des inconnues, de travailler avec un temps bien plus réduit que d'habitude, et de pratiquer la méthode agile SCRUM, utilisée en entreprise.`,
        startDate: new Date(`2023-09`),
        endDate: new Date(`2023-09`),
        link: "https://github.com/armandclonesady/As-Du-Crous",
        technologies: [skills.Java]
    }
}