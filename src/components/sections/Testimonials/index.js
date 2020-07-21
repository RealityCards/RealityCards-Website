import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../../utils/SectionProps";
import SectionHeader from "../partials/SectionHeader";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";
import Tweets from "./Tweets";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonials = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Testimonials",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Testimonial />
          <Tweets />
          <div className="text-center pt-32 mt-32 reveal-from-bottom">
            <p>
              Interested to meet the people behind the project? Check the{" "}
              <Link to="/team">Team page</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = propTypes;
Testimonials.defaultProps = defaultProps;

export default Testimonials;
