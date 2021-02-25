import React from 'react';
import SectionHeader from '../components/sections/partials/SectionHeader';

const Careers = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-inner">
            <SectionHeader
              data={{
                title: 'Careers',
                // paragraph: 'Two positions available',
              }}
              className="center-content w-75"
            />
            {/*<div className="w-75 panel">
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                 <div
                  className="tiles-item reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner rounded pt-0 text-center">
                    <div className="testimonial-item-footer text-xs mt-0 mb-0 pt-0">
                      <h2
                        className="testimonial-item-name text-color-high mb-2 mt-0"
                        style={{ display: 'block', color: '#222' }}
                      >
                        Full Stack Engineer
                      </h2>
                      <span
                        className="testimonial-item-link"
                        style={{ display: 'block' }}
                      >
                        OPEN NOW
                      </span>
                      <div className="footer-social has-top-divider mt-12 pt-12">
                        <ul className="list-reset">
                          <a
                            href="https://cryptocurrencyjobs.co/engineering/reality-cards-full-stack-engineer-for-defi-nft-prediction-market/"
                            target="_blank"
                            className="text-primary"
                          >
                            <b>See job description</b>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tiles-item reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner rounded pt-0 text-center">
                    <div className="testimonial-item-footer text-xs mt-0 mb-0 pt-0">
                      <h2
                        className="testimonial-item-name text-color-high mb-2 mt-0"
                        style={{ display: 'block', color: '#222' }}
                      >
                        Frontend Engineer
                      </h2>
                      <span
                        className="testimonial-item-link"
                        style={{ display: 'block' }}
                      >
                        OPEN NOW
                      </span>
                      <div className="footer-social has-top-divider mt-12 pt-12">
                        <ul className="list-reset">
                          <a
                            href="https://cryptocurrencyjobs.co/engineering/reality-cards-frontend-engineer-for-defi-nft-prediction-market/"
                            target="_blank"
                            className="text-primary"
                          >
                            <b>See job description</b>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{' '}
            */}
            <div className="text-center w-75 panel">
              <p>Thank you for choosing Reality Cards!</p>
              <p>
                Currently we don't have any open positions but if you are
                interested in possible future opportunities please send your CV
                to <b>careers@realitycards.io</b> or stay in touch on our{' '}
                <a
                  href="https://discord.gg/RS8pYJu"
                  target="_blank"
                  className="text-primary"
                >
                  <b>discord channel</b>
                </a>
                .
              </p>
              <p>Best of luck with your job search!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
