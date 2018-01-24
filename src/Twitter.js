import React, { Component } from 'react';
import './Twitter.css';

// const tweetsFromServer = [
//   {
//     "author": "Michael Scott",
//     "text": "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me."
//   },
//   {
//     "author": "Jeff Bezos",
//     "text": "In the end, we are our choices."
//   }
// ];

class Twitter extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="twitter">
        <header className="jumbotron">
          <div className="container">
            <h1>See what's happening right now.</h1>
            <h3>Find community, conversation, and inspiration about the things you love.</h3>
          </div>
        </header>
        <div className="container">
          <h1>Twitter</h1>
        </div>
      </div>
    );
  }
}

export default Twitter;
