import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../../utils/SectionProps";
import SectionHeader from "../partials/SectionHeader";
import Image from "../../elements/Image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import TeamMember from "./TeamMember";
import { team } from "./data";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const TeamContent = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const classes = classNames(
    "footer-social has-top-divider mt-12 pt-12",
    className
  );

  const sectionHeader = {
    title: `Team`,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flexGrow: 3 }}>
              <h2 className="h2-small mt-0 mb-24">Team members</h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {team.founders.map((member, index) => (
                  <TeamMember key={index} member={member} />
                ))}
              </div>
            </div>
            <div style={{ flexGrow: 1 }}>
              <h2 className="h2-small mt-0 mb-24">Advisors</h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {team.advisors.map((member, index) => (
                  <TeamMember key={index} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TeamContent.propTypes = propTypes;
TeamContent.defaultProps = defaultProps;

export default TeamContent;
