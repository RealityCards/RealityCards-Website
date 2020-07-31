import React, { useContext } from "react";
import { AppContext } from "../../../AppProvider";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const { themeMode } = useContext(AppContext);
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          {themeMode === "lightTheme" ? (
            <Image
              src={require("./../../../assets/images/logo.svg")}
              alt="Reality Cards"
              width={150}
              height={50}
            />
          ) : (
            <Image
              src={require("./../../../assets/images/logo-light.svg")}
              alt="Reality Cards"
              width={150}
              height={50}
            />
          )}
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
