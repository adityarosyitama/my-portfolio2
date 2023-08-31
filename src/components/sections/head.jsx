import Photo from "./photo";
import "./head.css";
function Head() {
  return (
    <div className="head_div">
      <div className="head_img">
        <Photo />
      </div>
      <br />
      <p className="head_text">
        Frontend (React && React Native) || Data Science
      </p>
      <div className="head_img2">
        <Photo />
      </div>
    </div>
  );
}
export default Head;
