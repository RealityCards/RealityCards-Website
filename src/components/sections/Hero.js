import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';

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
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content reveal-from-bottom">
            <h1 className="mt-0 mb-16" data-reveal-delay="200">
              <span className="text-color-primary">Reality Cards</span> is a
              unique hybrid of prediction markets and NFTs. Don't bet on an
              outcome, <span className="text-color-primary">own</span> it!
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 small" data-reveal-delay="400">
                Our app is live and you can try it now!
              </p>
              <div>
                <ButtonGroup>
                  <Button
                    tag="a"
                    className="button button-primary button-sm"
                    style={{ marginRight: '15px' }}
                    href="https://testnet.realitycards.io"
                  >
                    Testnet (Sokol)
                  </Button>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: '15px',
                      position: 'relative',
                    }}
                  >
                    <Button
                      tag="a"
                      className="button button-dark button-sm"
                      href="https://unaudited.realitycards.io"
                    >
                      Beta (xDai)
                    </Button>
                    <span
                      style={{
                        position: 'absolute',
                        fontSize: '11px',
                        lineHeight: '26px',
                        bottom: '-26px',
                      }}
                    >
                      Invite only:{' '}
                      <a
                        href="https://forms.gle/qAZocpWSX3vaAhZq6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        apply here
                      </a>
                    </span>
                  </div>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01 rounded"
            data-reveal-value="20px"
          >
            <a href="https://testnet.realitycards.io">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/demo.png')}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
