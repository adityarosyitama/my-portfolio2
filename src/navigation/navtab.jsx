// import Image from "next/image";
import { Link } from "react-scroll";
import "./navtab.css";
// import Navbot1 from "./navbot";
function Navtab() {
  return (
    <div className="navtab">
      <p className="navtab-text">Aditya Rosyitama</p>
      <div className="navtab2">
      <nav>
        <Link to={"head"} smooth={true} duration={500} style={{}}>
        <p className="navbot_text">HOME&nbsp;</p>
        </Link>
      </nav>
      <nav>
        <Link to={"project"} smooth={true} duration={500} style={{}}>
          <p className="navbot_text">PROJECT&nbsp;</p>
        </Link>
      </nav>
      <nav>
        <Link to={"aboutme"} smooth={true} duration={500} style={{}}>
          <p className="navbot_text">ABOUT ME&nbsp;</p>
        </Link>
      </nav>
    </div>
    </div>
  );
}
export default Navtab;
