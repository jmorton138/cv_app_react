import React, { Component } from 'react';

class RenderNewExpForm extends Component {
  render() {
    return (
        <div>
            <button onClick={(e) => this.props.RenderNewExpForm(e)}>Add new experience</button>
        </div>
    )
  }
}

export default RenderNewExpForm;
