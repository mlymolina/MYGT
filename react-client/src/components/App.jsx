import React from 'react';
import Menu from './Menu.jsx';
import CurrentView from './CurrentView.jsx';
import MainNavBar from './MainNavbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      user: 'Emely',
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <MainNavBar />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <Menu />
            </div>
              <div className='col-sm-8'>
              <CurrentView />
              </div>
          </div> 
        </div>
      </div>
    );
  }

}

export default App;
