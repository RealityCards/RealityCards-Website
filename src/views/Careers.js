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
                paragraph: '',
              }}
              className="center-content w-100"
            />
            <div className="text-center w-75 panel">
              <p>Thank you for choosing Reality Cards!</p>
              <p>
                Currently we don't have any open positions but if you are
                interested in possible future opportunities please send your CV
                to <b>careers@realitycards.io</b> or stay in touch on our{' '}
                <a
                  href="https://realitycards.io/discord"
                  // eslint-disable-next-line
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
