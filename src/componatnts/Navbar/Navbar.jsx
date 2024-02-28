import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Shop from "./../../pages/Shop/shop";
import Cart from "./../../pages/cart/cart";
import "./Navbar.css";
import { useRecoilState } from "recoil";
import { $user } from "../Store/Store";
import LogOut from "../LogOut/LogOut";

function NavBar() {
  const [auth] = useRecoilState($user);
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home">424 E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-between w-100 align-items-center ">
            <div className="d-flex gap-2">
              <Link to="/" className="text-decoration-none text-black">
                Home
              </Link>
              <Link to="/Shop" className="text-decoration-none text-black">
                Shop
              </Link>
              <Link to="/Cart" className="text-decoration-none text-black">
                Cart
              </Link>
            </div>

            <div className="d-flex gap-2">
              {auth.isAuth ? (
                <div className="d-flex align-items-center gap-3">
                  {auth.user.name}
                  <LogOut />
                </div>
              ) : (
                <>
                  <Link to="/Login" className="text-decoration-none text-black">
                    login
                  </Link>
                  <Link to="/Sign" className="text-decoration-none text-black">
                    Sign
                  </Link>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
