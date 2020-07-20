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
                paragraph:
                  "At this time we're having one open position for the role of Frontend Engineer. Please check the details below.",
              }}
              className="center-content"
            />
            <h3>Frontend Engineer</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
