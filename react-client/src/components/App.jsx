import React from 'react';
import Menu from './Menu.jsx';
import ActiveGoals from './ActiveGoals.jsx';
import MainNavBar from './MainNavbar.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: ['Get a job as a Software Engineer','Read 52 books','Get fit'],
      user: 'Emely',
      currentView: 'active_goals'
    };
    this.addGoal = this.addGoal.bind(this);
  }

  addGoal() {
    console.log('Hello from addGoal');
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <MainNavBar profile={this.state.user}/>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-8'>
              <ActiveGoals addGoal={this.addGoal} goals={this.state.goals}/>
            </div>
          </div> 
        </div>
      </div>
    );
  }

}

