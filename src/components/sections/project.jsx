import Projects from "./projects";
import mobiledev from "../../assets/mobiledev/index"
import blender from "../../assets/blender/index"
import webdev from "../../assets/webdev/index"
import datascience from "../../assets/datascience/index"
import "./project.css";

function Project() {
  return (
    <div className="project">
      <Projects text={"Mobile Developer"} data={mobiledev} backcol={"grey"} textcol={"white"} buttoncol={"rgba(255,255,255,0.8)"} buttontext={"black"}/>
      <Projects text={"Website Developer"}  data={webdev} backcol={"white"} textcol={"black"} buttoncol={"rgba(0,0,0,0.1)"} buttontext={"black"}/>
      <Projects text={"Blender 3D"}  data={blender} backcol={"grey"} textcol={"white"} buttoncol={"rgba(255,255,255,0.8)"} buttontext={"black"}/>
      <Projects text={"Data Science"}  data={datascience} backcol={"white"} textcol={"black"} buttoncol={"rgba(0,0,0,0.1)"} buttontext={"black"}/>
    </div>
  );
}

export default Project;
