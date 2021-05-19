import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

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
            <h3 className="m-0">Beta on xDai network</h3>
            <p className="small text-white">
              Bet real money on real-life events
            </p>
          </div>
          <div className="cta-action">
            <a
              href="https://forms.gle/qAZocpWSX3vaAhZq6"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark button-wide-mobile button-lg"
            >
              Apply now
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
