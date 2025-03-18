import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from "@mui/lab";

import { Experience } from "../../data/types";
import { formatDate, sortExperiences } from "../functions";
import ExperienceCard from "./ExperienceCard";

interface ExperienceTimelineProps {
	experiences: Experience[];
}

export default function ({ experiences }: ExperienceTimelineProps) {
	const sortedExperiences: Experience[] = sortExperiences(experiences);

	const orientation = () => {
		return Math.random() > 0.5 ? "alternate" : "alternate-reverse";
	};

	return (
		<Timeline position={orientation()}>
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
