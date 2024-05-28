import React from "react";

import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Button,
  Col,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row,
} from "reactstrap";

export default function AppNavbar() {
  const { pathname } = useLocation();

  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>Sign </span>
            Language Translator
          </NavbarBrand>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  BLK•React
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <NavLink to="/graduation-web-app/app/text-to-sign">
                <Button
                  className="nav-link d-none d-lg-block"
                  color={
                    pathname.endsWith("text-to-sign") ? "secondary" : "primary"
                  }
                >
                  Text To Sign
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/graduation-web-app/app/sign-to-text">
                <Button
                  className="nav-link d-none d-lg-block"
                  color={
                    pathname.endsWith("sign-to-text") ? "secondary" : "primary"
                  }
                >
                  Sign To Text
                </Button>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="/app">
                <Button
                  className="nav-link d-none d-lg-block"
                  color={
                    pathname.endsWith("text-to-sign") ? "secondary" : "primary"
                  }
                >
                  <i className="tim-icons icon-spaceship" /> Go To App
                </Button>
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
