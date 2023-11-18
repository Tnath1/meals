import "../Styles/Navbar.scss";
import Logo from "../assets/images/Group.png";
import Magnify from "../assets/images/Magnifier.png";
import Cart from "../assets/images/cart.png";

function Navbar() {
  return (
    <>
      <div className="navContainer">
        <div className="navFlex1">
          <img src={Logo} alt="Logo" />
          <span>Meals</span>
        </div>
        <div className="nav-pages">
          <a href="">Home</a>
          <a href="">Menu</a>
          <a href="">Meal Plans</a>
        </div>

        <div>
          <img src={Magnify} alt="Logo" />
          <img src={Cart} alt="Logo" />
        </div>
        <p>Sign In</p>
        <button className="btn1">Create Account</button>
      </div>
    </>
  );
}

export default Navbar;
