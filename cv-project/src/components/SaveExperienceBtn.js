import React, { Component } from 'react';

class SaveExperienceBtn extends Component {
  render() {
      const obj = this.props.obj;
    return (
            <button onClick={(e) => this.props.saveExpItem(e, obj)}>Save</button>
    )
  }
}

export default SaveExperienceBtn;
