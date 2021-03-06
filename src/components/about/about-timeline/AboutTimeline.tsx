import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledAboutTimeline, {
  StyledAboutTimelineArticle,
  StyledAboutTimelineHeading,
  StyledAboutTimelineMarkerTechnology,
  StyledAboutTimelineParagraph,
  StyledAboutTimelineMarker,
  StyledAboutTimelineMarkerProject,
  StyledAboutTimelineMarkerGraphic,
  StyledAboutTimelineMarkerProjectContainer,
  StyledAboutTimelineMarkerContainer
} from './AboutTimeline.styled';

interface AboutTimelineProps {
  timeline: {
    description: {
      body: string;
      title: string;
    };
    markers: {
      technology: string;
      projects: {
        project: {
          title: string;
          path: string;
        };
      }[];
    }[];
  };
}

const AboutTimeline: FC<AboutTimelineProps> = (props) => {
  return (
    <StyledAboutTimeline>
      <StyledAboutTimelineArticle>
        <div>
          <StyledAboutTimelineHeading>
            {props.timeline.description.title}
          </StyledAboutTimelineHeading>
          <StyledAboutTimelineParagraph>
            {props.timeline.description.body}
          </StyledAboutTimelineParagraph>
        </div>
        <StyledAboutTimelineMarkerContainer>
          {props.timeline.markers.map((item) => (
            <StyledAboutTimelineMarker key={uuidv4()}>
              <StyledAboutTimelineMarkerTechnology>
                {item.technology}
              </StyledAboutTimelineMarkerTechnology>
              <StyledAboutTimelineMarkerGraphic />
              <StyledAboutTimelineMarkerProjectContainer>
                {item.projects.map((item) => (
                  <StyledAboutTimelineMarkerProject
                    key={uuidv4()}
                    href={item.project.path}
                    target='_blank'
                  >
                    {item.project.title}
                  </StyledAboutTimelineMarkerProject>
                ))}
              </StyledAboutTimelineMarkerProjectContainer>
            </StyledAboutTimelineMarker>
          ))}
        </StyledAboutTimelineMarkerContainer>
      </StyledAboutTimelineArticle>
    </StyledAboutTimeline>
  );
};

export default AboutTimeline;
