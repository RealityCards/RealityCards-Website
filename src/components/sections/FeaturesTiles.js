import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Roadmap 2020-2021',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h5 className="mt-0 mb-0">Phase 0</h5>
                  <h4 className="text-color-primary mt-0 mb-8">MVP</h4>
                  <p className="m-0 text-sm text-left">
                    • Contract written and audited
                    <br />• Comprehensive UX/UI design
                    <br />• React app
                    <br />• Deployed on mainnet
                  </p>
                  <h5 className="small mb-0 text-color-success">
                    ETA: completed
                  </h5>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h5 className="mt-0 mb-0">Phase 1</h5>
                  <h4 className="text-color-primary mt-0 mb-8">
                    Testnet Launch
                  </h4>
                  <p className="m-0 text-sm text-left">
                    • Gamification (leaderboards, trophy cabinet)
                    <br />• Integration with TheGraph
                    <br />• New look and feel
                  </p>
                  <h5 className="small mb-0 text-color-success">
                    ETA: completed
                  </h5>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h5 className="mt-0 mb-0">Phase 2</h5>
                  <h4 className="text-color-primary mt-0 mb-8">
                    Public launch
                  </h4>
                  <p className="m-0 text-sm text-left">
                    • Underbidding
                    <br />• Metatransactions, mainnet deposits
                    <br />• Upgradable NFTs
                    <br />• Allow users to create their own events
                  </p>
                  <h5 className="small mb-0">ETA: late 2021</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center reveal-from-bottom">
            <p>
              Have more questions? Check our 33 points{' '}
              <Link to="/faq">FAQ page</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
