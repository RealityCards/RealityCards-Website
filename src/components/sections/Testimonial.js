import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
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
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner rounded">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Traditionally you'd place the bet and forget. On Reality
                    Cards I've found myself checking if I still have ownership
                    or do I need to increase the rent. It's kinda like a lottery
                    dangling a prize in front of you but you have the ability to
                    keep increasing your stake.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Daniel Chilvers
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">Engineer</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner rounded">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — There is a strong positive feedback loop incentivizing
                    participation. Since rent payments are likely to
                    continuously increase, and winnings are proportional to time
                    held, it’s rational to pay rent early on. If the total rent
                    grows massively, early holders get significantly better odds
                    on their bet 👍
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Will Price
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">Data Scientist</span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner rounded">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — You really did a great job with the UX! The values on the
                    front end, such as the percentage of ownership of the token
                    and the implied odds really emphasize the uniqueness of this
                    radically new type of prediction market. It’s something
                    fundamentally new and it makes the whole process of betting
                    on something finally engaging! I’m already a fan 💪
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Marvin Kruse
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://ditcraft.io">ditCraft</a>
                  </span>
                </div>
              </div>
            </div>

            {/* <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner rounded">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — The more I think about it, the more I like it.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Dennison Bertram
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.dapphero.io/">DappHero</a>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
