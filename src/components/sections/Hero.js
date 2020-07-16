import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import ModalVideo from "react-modal-video";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = () => {
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <span className="text-color-primary">Reality Cards</span> is a new
              type of prediction market, where instead of{" "}
              <span className="text-line-through">betting</span> on an outcome,
              you <span className="text-color-primary">own</span> it!
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom small"
                data-reveal-delay="400"
              >
                Reality Cards is currently in closed beta and an access token is
                required. Please join our{" "}
                <a
                  href="https://discord.gg/RS8pYJu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  discord group
                </a>{" "}
                and ask one of the team members for one.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://app.realitycards.io"
                  >
                    Visit DApp
                  </Button>
                  <p className="small"></p>
                  {/* <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="#"
                  >
                    View on Github
                  </Button> */}
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01 rounded"
            data-reveal-value="20px"
          >
            <a
              data-video="https://youtu.be/MmRYznJiHlA"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <ModalVideo
            channel="youtube"
            isOpen={videoModalActive}
            videoId="MmRYznJiHlA"
            onClose={closeModal}
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
