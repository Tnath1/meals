import "../Styles/Navbar.scss";
import HomeImg from "../assets/images/homeimg.png";

function Home() {
  return (
    <>
      <div className="homecontainer">
        <div className="writing">
          <h3>Delicious meals at your convenience</h3>
          <p>
            Order your meals from us and we will have it delivered at your
            doorstep.
          </p>
          <button className="btn2">Get Started</button>
        </div>
        <div>
          <img src={HomeImg} alt="plate of jellof rice and chicken" />
        </div>
      </div>
    </>
  );
}

export default Home;
