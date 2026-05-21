import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning Project",
    tools:
      "Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn",
    description:
      "Built machine learning models to predict customer churn using classification algorithms and model evaluation techniques.",
  },

  {
    title: "Cricket Player Segmentation",
    category: "K-Means Clustering Project",
    tools:
      "Python, Pandas, Scikit-learn, Matplotlib, Seaborn",
    description:
      "Applied K-Means clustering to segment cricket players based on performance statistics and visualization.",
  },

  {
    title: "Census Income Prediction",
    category: "Classification Project",
    tools:
      "Python, Pandas, NumPy, Scikit-learn, Data Visualization",
    description:
      "Developed a classification model to predict income categories using preprocessing and machine learning techniques.",
  },

  {
  title: "Portfolio Website",
  category: "Personal Portfolio",
  tools:
    "React.js, TypeScript, Vite, CSS",
  description:
    "Designed and customized a modern portfolio website to showcase projects, skills, and technical profile.",
},
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;

      setIsAnimating(true);

      setCurrentIndex(index);

      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div
                    className="carousel-content"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="carousel-info"
                      style={{
                        maxWidth: "800px",
                        textAlign: "center",
                      }}
                    >
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>

                        <p className="carousel-category">
                          {project.category}
                        </p>

                        <div className="carousel-tools">
                          <span className="tools-label">
                            Tools & Features
                          </span>

                          <p>{project.tools}</p>
                        </div>

                        <p
                          style={{
                            marginTop: "1.5rem",
                            lineHeight: "1.8",
                            opacity: 0.8,
                            fontSize: "1rem",
                          }}
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex
                    ? "carousel-dot-active"
                    : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;