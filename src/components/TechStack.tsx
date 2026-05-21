import Marquee from "react-fast-marquee";

const techStack = [
  "Python",
  "MS SQL",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "Machine Learning",
  "EDA",
  "K-Means",
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Techstack</h2>

      <div className="techstack-marquee">
        <Marquee speed={60} gradient={false}>
          {techStack.map((tech, index) => (
            <div className="tech-pill" key={index}>
              {tech}
            </div>
          ))}
        </Marquee>

        <Marquee
          speed={60}
          gradient={false}
          direction="right"
          style={{
            marginTop: "2rem",
          }}
        >
          {techStack.map((tech, index) => (
            <div className="tech-pill" key={index}>
              {tech}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;