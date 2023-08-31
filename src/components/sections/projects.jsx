import "./projects.css";
import { useState } from "react";
import PropTypes from "prop-types";
function Projects(props) {
  const [num, setNum] = useState(0);
  const handleRight = () =>
    setNum(num === props.data.length - 1 ? props.data.length - 1 : num + 1);
  const handleLeft = () => setNum(num === 0 ? 0 : num - 1);
  // console.log("props", props.backcol);
  return (
    <div className="projects" style={{ backgroundColor: props.backcol }}>
      <p className="projectstext2" style={{ color: props.textcol }}>
        {props.text}
      </p>
      <div className="projects2">
        <button className="projectsbutton" onClick={handleLeft}>
          <p
            className="projectstext"
            style={{ backgroundColor: props.buttoncol, color: props.buttontext }}
          >
            {"<"}
          </p>
        </button>
        <a
          href={props.data[num].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projects3">
            <p className="projectstext2" style={{ color: props.textcol }}>
              {props.data[num].name}
            </p>
            <img
              className="projectsimg"
              src={props.data[num].image}
              alt={props.data[num].name}
              width={"100%"}
              height={"100%"}
              style={{
                borderRadius: "10%",
                alignSelf: "center",
              }}
            />
          </div>
        </a>
        <button className="projectsbutton" onClick={handleRight}>
          <p
            className="projectstext"
            style={{ backgroundColor: props.buttoncol, color: props.buttontext }}
          >
            {">"}
          </p>
        </button>
      </div>
    </div>
  );
}

Projects.propTypes = {
  data: PropTypes.array.isRequired,
  backcol: PropTypes.string.isRequired,
  textcol: PropTypes.string.isRequired,
  buttoncol: PropTypes.string.isRequired,
  buttontext: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Projects;
