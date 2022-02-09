import React, { Component } from 'react';

class AddEduForm extends Component {
  render() {
    return (
    <div>
        <button onClick={(e) => this.props.newEduForm(e)}>{this.props.text}</button>
    </div>
    )
  }
}

export default AddEduForm;
