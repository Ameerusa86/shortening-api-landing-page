import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../images/logo.svg";
import Button from "../Button/Button";

export default function Navbar() {
  const ref = useRef(null);
  const [isResize, setIsResize] = useState(null);
  const [navMenuStyle, setNavMenuStyle] = useState(false);

  const signUpBtnStyle = {
    borderRadius: 25,
    width: "80%",
  };

  const toggleMobileNav = () => {
    if (navMenuStyle === "none") {
      setNavMenuStyle("flex");
    } else {
      setNavMenuStyle("none");
    }
  };

  const showNav = () => {
    const width = ref.current.offsetWidth;
    if (width > 800) {
      setNavMenuStyle("flex");
    } else {
      setNavMenuStyle("none");
    }
  };

  // updates if the screen resizes
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsResize(ref.current.offsetWidth);
      showNav();
    });

    return () => {
      window.removeEventListener("resize", () => {
        showNav();
      });
    };
  }, [isResize]);

  return (
    <div className="mobile-nav" ref={ref}>
      <img src={logo} alt="shortly logo" className="website-logo" />
      <button className="mobile-burger" onClick={toggleMobileNav}>
        <span className="button-burger"></span>
        <span className="button-burger"></span>
        <span className="button-burger"></span>
      </button>
      <nav className="nav-menu" style={{ display: navMenuStyle }}>
        <ul className="nav-left">
          <li>
            <a href="/#">Features</a>
          </li>
          <li>
            <a href="/#">Pricing</a>
          </li>
          <li>
            <a href="/#">Resources</a>
          </li>
        </ul>
        <hr className="divider-line" />
        <div className="authentication">
          <p>
            <a href="/#">Login</a>
          </p>
          <Button styles={signUpBtnStyle}>Sign up</Button>
        </div>
      </nav>
    </div>
  );
}
