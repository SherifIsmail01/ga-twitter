import React, { Component } from 'react';

class Tweet extends Component {
  constructor(props) {
    super(props);

  }
  // deleteTweet(e) {
  //   e.preventDefault();
  //   fetch('/api/tweets', {
  //     method: 'DELETE',
  //   }).then((res) => {
  //     window.location.reload();
  //   });
  // }

  render() {
    return (
      <div className="container tweets-container">
        <div className="tweet">

            <li>{ this.props.text }</li>
            <p>By: { this.props.author }</p>
            
            <br />
        </div>
      </div>
    );
  }
}

export default Tweet;
