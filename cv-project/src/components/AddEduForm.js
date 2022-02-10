import React, { Component } from 'react';

class AddEduForm extends Component {
  render() {
    return (
    <div className='button-container'>
        <button onClick={(e) => this.props.newEduForm(e)}>Add</button>
    </div>
    )
  }
}

export default AddEduForm;
