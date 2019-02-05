import React from 'react';

export default class Goal extends React.Component {
  render() {
    return (
      <li className='goal'>{this.props.goal}</li>
    );
  }
}
