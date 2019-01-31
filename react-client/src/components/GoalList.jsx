import React from 'react';
import Goal from './Goal.jsx'


class GoalList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='goal-list'>
        <h5>Active Goals</h5>
        {this.props.goals.map((goal, i) => {
          return (<Goal key={i} goal={goal}/>)
        })}
      </ul>
    );
  }
}

export default GoalList;