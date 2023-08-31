import Head from "../components/sections/head";
import Navbot from "../navigation/navbot";
import Navtab from "../navigation/navtab";
import Project from "../components/sections/project";
import "./Home.css";
import Aboutme from "../components/sections/aboutme";
import { Element } from "react-scroll";

function Home() {
  return (
    <>
      <Navtab />
      <Element name="head">
        <Head />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="aboutme">
        <Aboutme />
      </Element>
      <Navbot />
    </>
  );
}

export default Home;
