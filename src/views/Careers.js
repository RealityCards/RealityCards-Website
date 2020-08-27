import React from "react";
import SectionHeader from "../components/sections/partials/SectionHeader";

const Careers = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-inner">
            <SectionHeader
              data={{
                title: "Careers",
                paragraph: "At this time, there are no positions available",
              }}
              className="center-content w-75"
            />
            <div className="w-75 panel">
              <p>Thank you for choosing Reality Cards!</p>
              <p>
                Currently we don't have any open positions but if you are
                interested in possible future opportunities please send your CV
                to <b>careers@realitycards.io</b> or stay in touch on our{" "}
                <a href="https://discord.gg/RS8pYJu" target="_blank">
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
