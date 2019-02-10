import React, { Component } from 'react';

class NewTweetModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: ''
    }
    this.onChangeNameInput = this.onChangeNameInput.bind(this);
    this.onChangeTextInput = this.onChangeTextInput.bind(this);
    this.newTweet = this.newTweet.bind(this);
  }

  onChangeNameInput(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeTextInput(e) {
    this.setState({
      text: e.target.value
    });
  }
  newTweet(e) {
    e.preventDefault();
      fetch('/api/tweets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          author: this.state.name,
          text: this.state.text
        })
      }).then((res) => {
        return res.json()
      }).then((data) => {
        console.log('data: ', data);
        this.props.newTweet(data);
      })
  }

  render() {
    return (
          <div className="modal fade show" style={{display: 'block'}}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="NewtweetLabel">New Tweet</h5>
                </div>

                <div className="modal-body">
                  <form onSubmit= {this.newTweet} >
                    <input onChange={this.onChangeNameInput} type="name" value = {this.state.name} placeholder=" Author name" />
                      <br />
                      <br />
                    <input onChange={this.onChangeTextInput} type="block" value = {this.state.text} placeholder="text" />
                      <br />
                      <br />
                    <button type="submit" className="btn btn-outline-success pull-left" >Submit</button>
                    <button type="button" className="btn btn-outline-warning  pull-right" onClick={ this.props.close }>Close</button>
                  </form>
                </div>

                <div className="modal-footer">
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default NewTweetModal;
