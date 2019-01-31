import React from 'react';

class Goal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='goal'>{this.props.goal}</li>
    );
  }
}

export default Goal;