import { Link } from "react-scroll";
import "./navbot.css";
function Navbot() {
  return (
    <div className="navbot">
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
  );
}

export default Navbot;
