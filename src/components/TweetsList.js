import React, { Component } from 'react';
import Tweet from './Tweet.js'

class TweetsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="tweets-list">
            { this.props.displayTweets.map(function(eachTweet) { 
              return <Tweet author={eachTweet.author} text={eachTweet.text} /> } 
              )}
        </div>
      </div>
    );
  }
}

export default TweetsList;
