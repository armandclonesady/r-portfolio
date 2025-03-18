import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from "@mui/lab";

import { experiences } from "../../data/experiences";
import { Experience } from "../../data/types";
import { formatDate, sortExperiences } from "../functions";
import ExperienceCard from "./ExperienceCard";

export default function () {
	const experienceList = Object.values(experiences) as Experience[];

	const sortedExperiences: Experience[] = sortExperiences(experienceList);

	return (
		<Timeline position="alternate">
			{sortedExperiences.map((experience, index) => (
				<TimelineItem key={index}>
					<TimelineOppositeContent
						sx={{ m: "auto 0" }}
						align="right"
						variant="body2"
						color="text.secondary"
					>
						{formatDate(experience.startDate)}
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot variant="outlined" color="primary" />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<ExperienceCard experience={experience} />
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
}
