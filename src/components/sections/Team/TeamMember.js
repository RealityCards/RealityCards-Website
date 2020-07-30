import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../../utils/SectionProps";
import Image from "../../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const TeamMember = ({ member }) => {
  const { image, name, role, linkedin, telegram, twitter, mail } = member;

  const classes = classNames("footer-social has-top-divider mt-12 pt-12");

  return (
    <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
      <div className="tiles-item-inner rounded pt-0 text-center">
        <div className="testimonial-item-content team-item">
          <Image src={image} alt={name} width={164} height={164} />
        </div>
        <div className="testimonial-item-footer text-xs mt-0 mb-0 pt-0">
          <span
            className="testimonial-item-name text-color-high mb-2"
            style={{ display: "block" }}
          >
            {name}
          </span>
          {/* <span className="text-color-low"> / </span> */}
          <span
            className="testimonial-item-link"
            style={{ display: "block" }}
            dangerouslySetInnerHTML={{ __html: role }}
          />
          <div className={classes}>
            <ul className="list-reset">
              {linkedin && (
                <li>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="linkedin"
                      className="svg-inline--fa fa-linkedin fa-w-14"
                      role="img"
                      viewBox="0 0 448 512"
                      height="16"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </a>
                </li>
              )}
              {telegram && (
                <li>
                  <a href={telegram} target="_blank" rel="noopener noreferrer">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="telegram"
                      role="img"
                      viewBox="0 0 496 512"
                      height="16"
                    >
                      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                    </svg>
                  </a>
                </li>
              )}
              {twitter && (
                <li>
                  <a href={twitter} target="_blank" rel="noopener noreferrer">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Twitter</title>
                      <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
                    </svg>
                  </a>
                </li>
              )}
              {mail && (
                <li>
                  <a href={`mailto:${mail}`}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="envelope"
                      className="svg-inline--fa fa-envelope fa-w-16"
                      role="img"
                      viewBox="0 0 512 512"
                      height="16"
                    >
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                    </svg>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamMember.propTypes = propTypes;
TeamMember.defaultProps = defaultProps;

export default TeamMember;
