import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import beerLogo from "../../assets/img/favicon-32x32.png";
import heartLogo from "../../assets/img/heart.png";
import * as firebase from "firebase";

function Header({ user }) {
  return (
    <Navbar
      variant="light"
      fixed="top"
      expand
      style={{ backgroundColor: "#60a4d7", minHeight: "9vh" }}
    >
      {user && (
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/menu" style={{ color: "#000" }}>
              <img src={beerLogo} alt="logo" />
              Menu
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/favourites" style={{ color: "#000" }}>
              <img src={heartLogo} style={{ width: "32px" }} alt="logo" />
              Favourites
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/details" style={{ color: "#000" }}>
              Details
            </Link>
          </Nav.Link>
        </Nav>
      )}
      {user ? (
        <>Hello, {user.email}
        <Button variant="outlined" onClick={() => firebase.auth().signOut()}>
          Logout
        </Button>
        </>
      ) : (
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/register" style={{ color: "#000" }}>
              Register
            </Link>
          </Nav.Link>
          <Nav.Link to="/login" className="ml-auto">
            <Link to="/login" style={{ color: "#000" }}>
              Login
            </Link>
          </Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
}

export default Header;
