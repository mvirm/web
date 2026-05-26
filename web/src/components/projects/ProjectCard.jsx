import ParseStrongText from "../utils/parseText/ParseStrongText";
import ParseStrongTitle from "../utils/parseText/ParseStrongTitle";
const ProjectCard = ({
  id,
  title,
  subtitle,
  background,
  images,
  details,
  highlights,
}) => {
  return (
    <div className="projectCard">
      <picture>
        <source media="(min-width: 768px)" srcSet={background[0]} />
        <img src={background[1]} alt={title} loading="lazy" />
      </picture>
      <div className="projectCardContent">
        <section className="projectCardHead">
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </section>
        <div className="projectCardBody">
          <section className="projectCard-sectionImages">
            {images?.map((img, index) => (
              <img key={index} src={img} loading="lazy" />
            ))}
          </section>
          <section className="projectCard-sectionDetails">
            {details?.map((detail, index) => (
              <div key={index} className="detailContent">
                <div>
                  <h6>{ParseStrongTitle(detail.title)}</h6>
                </div>
                <p>{ParseStrongText(detail.description)}</p>
              </div>
            ))}
          </section>
        </div>
        <section className="projectCard-sectionHighlights">
          <span>{highlights[0]}</span>
          <span>{highlights[1]}</span>
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
