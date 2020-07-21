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
                  "Reality Cards has one open position for the role of Frontend Engineer.",
              }}
              className="center-content w-75"
            />
            <div className="w-75 panel">
              <h3>Frontend Engineer</h3>
              <p>
                <i>
                  We’re an early-stage startup and have just finished the MVP phase. We closed
                  our seed round two weeks ago. We need your help to work towards a full public release.
                </i>
              </p>
              <p>
                <b>
                  Reality Cards is a decentralized prediction market based on
                  NFTs (non-fungible tokens) on the Ethereum network.
                </b>{" "}
                Currently, the team consists of just us two co-founders.
                We are looking to make our first hire.
              </p>
              <p>
                We’re starting a team to build the first iteration of our
                decentralized platform. For the first version, we are looking to
                rewrite the MVP to a new scalable infrastructure, after which we
                have plans for new features and major improvements. The
                development process will be continuous leading to rapidly
                changing iterations.
              </p>
              <p>
                <b>We’re looking to hiring a frontend engineer who:</b>
              </p>
              <ul>
                <li>
                  <b>Feels comfortable writing Javascript</b>
                </li>
                <li>
                  <b>
                    Has experience in React (knowledge of hooks and good coding
                    patterns is nice to have)
                  </b>
                </li>
                <li>
                  <b>
                    Is familiar with the Ethereum environment (nice to have but
                    not a strong requirement)
                  </b>
                </li>
              </ul>
              <p>
                <b>The position is full time, long term, and fully remote.</b>{" "}
              </p>
              <p>
                <i>
                  We prefer to hire someone from an Asian timezone for better
                  collaboration, but not essential.
                </i>
              </p>
              <p>In order to apply we need:</p>
              <ul>
                <li>
                  <b>Your CV</b> (can be informal aka personal website, linkedin)
                </li>
                <li>
                  <b>Your Github</b>
                </li>
                <li>
                  <b>A paragraph</b> describing your previous experience (does not matter if it isn't much)
                </li>
                <li>
                  A couple of UI/UX suggestions on how we could improve the current platform.
                </li>
              </ul>
              <p>
                Please reach us at <b>careers@realitycards.io</b> or on our{" "}
                <a href="https://discord.gg/RS8pYJu" target="_blank">
                  <b>discord channel</b>
                </a>{" "}
                for an access code to the closed beta. We will reply ASAP
                (usually right away)
              </p>
              <p>Looking forward to hearing from you!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
