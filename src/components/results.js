import React, { Component } from 'react';
class Results extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  votesAngularInPercent(){
    if(this.store.getState().angular){
      return (this.store.getState().angular / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
    }else{
      return 0
    }
  }
  votesReactInPercent(){
    if(this.store.getState().react){
      return (this.store.getState().react / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
    }else{
      return 0
    }
  }
  votesVuejsInPercent(){
    if(this.store.getState().vuejs){
      return (this.store.getState().vuejs  / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
    }else{
      return 0
    }
  }

  render(){
    return (
      <div>
        {JSON.stringify(this.store.getState())}

        <span className="label label-danger">Angular: {this.votesAngularInPercent().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-danger" style={{width:this.votesAngularInPercent()+'%'}}>

          </div>
        </div>
        <span className="label label-danger">VueJS: {this.votesVuejsInPercent().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-danger" style={{width:this.votesVuejsInPercent()+'%'}}>

          </div>
        </div>
        <span className="label label-danger">React: {this.votesReactInPercent().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-danger" style={{width:this.votesReactInPercent()+'%'}}>

          </div>
        </div>
      </div>
    )
  }

}

export default Results;
