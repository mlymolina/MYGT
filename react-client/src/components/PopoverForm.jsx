import React from 'react';

class PopoverForm extends React.Component {
  render() {
    return (
      <div className='popover-form'>
        <form action="">
          <div class="popover-form-input">
            <label for="name">Goal: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div class="popover-form-input">
            <input type="submit" value="Add!"/>
          </div>
        </form>
      </div>
    );
  }
}

export default PopoverForm;