import React from 'react';

class Button extends React.Component {
  render() {
    return(
      <button 
        type='button' 
        className='btn btn-outline-primary'
        onClick={this.props.addGoal}>
        Add Goal
      </button>
    );
  }
}

export default Button;