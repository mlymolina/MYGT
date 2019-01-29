import React from 'react';

class MainNavbar extends React.Component {
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
        <nav className='navbar navbar-dark bg-primary'>
          <a className='navbar-brand' href='#'>
            {/* <img src="https://www.flaticon.com/free-icon/goal_171656" width="30" height="30" className="d-inline-block align-top" alt="" /> */}
            MYGT
          </a>
        </nav>
      </div>
    );
  }

}

export default MainNavbar;