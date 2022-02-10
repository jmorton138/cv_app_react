import React, { Component } from 'react';

class RenderNewExpForm extends Component {
  render() {
    return (
        <div className='button-container'>
            <button onClick={(e) => this.props.renderNewExpForm(e)}>{this.props.text}</button>
        </div>
    )
  }
}

export default RenderNewExpForm;
