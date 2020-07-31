import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Tweets = ({}) => {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-around">
      <TwitterTweetEmbed tweetId={"1284852231691546629"} />
      <TwitterTweetEmbed tweetId={"1288360633281347586"} />
      <TwitterTweetEmbed tweetId={"1276643346841247745"} />
    </div>
  );
};

export default Tweets;
