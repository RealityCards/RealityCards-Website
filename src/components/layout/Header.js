import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./partials/Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import Button from "../elements/Button";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.addEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  return (
    <header {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <Logo />
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <li>
                      <Link to="/faq" onClick={closeMenu}>
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/team" onClick={closeMenu}>
                        Team
                      </Link>
                    </li>
                  </ul>
                  {!hideSignin && (
                    <ul className="list-reset header-nav-right">
                      <li>
                        <Button
                          tag="a"
                          href="https://xdai.realitycards.io"
                          className="button button-primary button-wide-mobile button-sm"
                          onClick={closeMenu}
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="realitycards"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            style={{ marginRight: 10 }}
                            viewBox="0 0 338.6835 338.6837"
                            className="svg-white"
                          >
                            <path d="M140.679,203.275h21.086V181.861a21.0986,21.0986,0,0,1,20.754-20.755h21.415V140.02a20.67,20.67,0,0,1,20.756-20.756H331.434A169.2606,169.2606,0,0,0,169.672,0C76.105,0,0,75.775,0,169.342A169.5421,169.5421,0,0,0,119.923,331.434V224.031a20.67,20.67,0,0,1,20.756-20.756" />
                            <path d="M220.4075,140.02v21.0861h118.276a161.7585,161.7585,0,0,0-2.966-25.369H224.6905a4.3608,4.3608,0,0,0-4.283,4.2829" />
                            <path d="M178.2376,181.8614v21.414h25.697v-25.697h-21.416a4.36,4.36,0,0,0-4.281,4.283" />
                            <path d="M178.2376,219.7477v118.936a137.3592,137.3592,0,0,0,25.697-3.295V219.7477Z" />
                            <path d="M140.679,219.7477a4.154,4.154,0,0,0-4.283,4.283v111.358a130.576,130.576,0,0,0,25.369,3.295V219.7477Z" />
                            <path d="M220.4075,203.275h115.31a170.7094,170.7094,0,0,0,2.966-25.697H220.4075Z" />
                            <path d="M220.4075,331.4342a170.9139,170.9139,0,0,0,111.027-111.687H220.4075Z" />
                          </svg>{" "}
                          Visit DApp
                        </Button>
                      </li>
                      <li className="switch-wrapper">
                        <ThemeSwitcher />
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
