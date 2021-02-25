import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const CtaDiscord = ({
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
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner rounded',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">Live on testnet</h3>
            <p className="small text-white">
              Learn the rent mechanics to prepare yourself for the public
              launch.
            </p>
          </div>
          <div className="cta-action">
            <a
              href="https://testnet.realitycards.io"
              className="button button-dark button-wide-mobile button-lg"
            >
              Try it now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

CtaDiscord.propTypes = propTypes;
CtaDiscord.defaultProps = defaultProps;

export default CtaDiscord;
