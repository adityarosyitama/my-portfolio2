import "./photo.css"
function Photo() {
    return (
      <img className="photo_img"
        src={"https://i.ibb.co/bQhj9cF/1690985718646.jpg"}
        alt={"my_photo"}
        width={"50%"}
        style={{ borderRadius: "100%", alignSelf: "center" }}
      />
    );
  }
  export default Photo