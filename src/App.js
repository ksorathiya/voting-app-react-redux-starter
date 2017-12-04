import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          {JSON.stringify(this.store.getState())}
          <h2>What is your favourite front-end framework?</h2>
          <input type="button" value="react" onClick={this.handleVoteReact}/>
          <input type="button" value="angular" onClick={this.handleVoteAngular}/>
          <input type="button" value="vue" onClick={this.handleVoteVuejs}/>
        </div>
      </div>
    );
  }
}

export default App;
