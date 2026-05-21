import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Program in AI & DS</h4>
                <h5>Intellipaat | iHUB IIT Indore</h5>
              </div>
              <h3>2025</h3>
            </div>

            <p>
              Learned Python, SQL, Exploratory Data Analysis,
              Machine Learning, model evaluation, and data
              visualization through hands-on projects and
              practical assignments.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>BIET Sikar</h5>
              </div>
              <h3>2021 - 2025</h3>
            </div>

            <p>
              Completed Computer Science Engineering with focus
              on programming, databases, machine learning
              fundamentals, and problem solving.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GATE Qualified (CS)</h4>
                <h5>Graduate Aptitude Test in Engineering</h5>
              </div>
              <h3>2025</h3>
            </div>

            <p>
              Qualified GATE Computer Science examination with
              AIR 7912 and score of 483.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;