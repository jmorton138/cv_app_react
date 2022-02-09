import React, { Component } from 'react';

class AddEdu extends Component {
  render() {
    return (
    <div>
        <button onClick={this.props.newEducation}>Add New Education</button>
    </div>
    )
  }
}

export default AddEdu;
