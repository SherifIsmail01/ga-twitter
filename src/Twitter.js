import React, { Component } from 'react';
import './Twitter.css';
import NewTweetModal from'./components/NewTweetModal.js';
import TweetsList from'./components/TweetsList.js';
import $ from 'jquery';


class Twitter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      showNewTweetModal : false
    };
    this.showNewTweetModal = this.showNewTweetModal.bind(this);
    this.closeNewTweetModal = this.closeNewTweetModal.bind(this);
    this.addTweet = this.addTweet.bind(this);
  }

  showNewTweetModal() {
    this.setState({
      showNewTweetModal: true
    });
  }

  closeNewTweetModal() {
    this.setState({
      showNewTweetModal: false
    });
    window.location.reload();
  }

  addTweet(data) {
    this.setState({
      tweets: this.state.tweets.concat(data)
    });
  }

  // componentWillMount is a lifecycle method in react it will always run before render
  //e.g server request to get all tweets
  componentWillMount() {
     $.get('/api/tweets', (fetchedDataFromServer) => {
      console.log('data: ', fetchedDataFromServer);
      this.setState({
        tweets: fetchedDataFromServer
      });
    });
  }
  //componentWillMount is a lifecycle method in react it will always run after render 
  //e.g anything that needs the DOM (like jquery)
  componentDidMount () {
    
  }

  render() {
    return (
      <div className="twitter">
        <header className="jumbotron">
          <div className="container">
            <h2>See what's happening right now.</h2>
            <h4>Find community, conversation, and inspiration about the things you love.</h4>
          </div>
        </header>

        <div className="newtweetmodal">
          <button onClick={ this.showNewTweetModal } ref="newtweetmodal" className="btn btn-large btn-outline-secondary new-tweet-btn">New Tweet</button>
        </div>
          { this.state.showNewTweetModal ? <NewTweetModal newTweet = { this.addTweet } close= { this.closeNewTweetModal }/> : null }

        <div className="container">
          <h2>Tweets</h2>
          <br />
          <TweetsList  displayTweets={ this.state.tweets } />
        </div>
      </div>
    );
  }
}

export default Twitter;
