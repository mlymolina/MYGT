import React from 'react';
import GoalList from './GoalList.jsx';
import Button from './Button.jsx';

export default class ActiveGoals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='active-goals'>
        <GoalList goals={this.props.goals}/>
        <Button addGoal={this.props.addGoal}/>
      </div>
    );
  }
}
