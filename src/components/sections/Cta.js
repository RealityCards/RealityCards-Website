import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner rounded",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`https://${process.env.REACT_APP_APP_URL}/api/newsletter`, {
        email: email,
      })
      .then(function (response) {
        setSent(true);
        setLoading(false);
      })
      .catch(function (error) {
        setError(true);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setError(false);
    setEmail(e.target.value);
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          {!sent ? (
            <>
              <div className="cta-slogan">
                <h3 className="m-0">Want to be kept in the loop?</h3>
                <p className="small text-white">
                  Enter your email to be notified on new updates
                </p>
              </div>
              <div className="cta-action">
                {!loading ? (
                  <form onSubmit={handleSubmit}>
                    <Input
                      id="newsletter"
                      type="email"
                      label="Subscribe"
                      labelHidden
                      hasIcon="right"
                      placeholder="Your email"
                      value={email}
                      onChange={handleChange}
                    >
                      <svg
                        width="16"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                          fill="#00aeef"
                        />
                      </svg>
                    </Input>
                    <input type="submit" style={{ visibility: "hidden" }} />
                    {error && (
                      <p className="text-color-error small mb-0">
                        Something went wrong:( Please try again
                      </p>
                    )}
                  </form>
                ) : (
                  <div className="loader"></div>
                )}
              </div>
            </>
          ) : (
            <div className="cta-slogan">
              <h3 className={`m-0`}>Thank you for subscribing!</h3>
              <p className="small text-white">
                We'll keep you updated on our progress. Expect one email every
                few weeks. We don't want to spam you!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
