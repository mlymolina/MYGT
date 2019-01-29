import React from 'react';
import Button from './Button.jsx';

class CurrentView extends React.Component {

  render() {
    return (
      <div>
        <Button/>
        <div >Active Goals</div>
      </div>
    );
  }
}

export default CurrentView;