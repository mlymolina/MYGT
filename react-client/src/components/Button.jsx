import React from 'react';

export default class Button extends React.Component {
  render() {
    return(
      <button 
        type='button' 
        className='btn btn-add-goal btn-outline-primary'
        onClick={this.props.addGoal}>
        Add Goal
      </button>
    );
  }
}
