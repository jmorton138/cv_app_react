import React, { Component } from 'react'
import ExperienceItemForm from './ExperienceItemForm';
import RenderNewExpForm from './RenderNewExpForm';

class ExperienceForms extends Component {
  render() {
    let addform;
    let expform;
    let text;

    if (this.props.state.renderEduForm === false) {
      text = "Add new experience";
    } else {
        text = "Cancel new experience";
    }

  if (this.props.state.renderExpForm === true) {
      expform = <ExperienceItemForm  experience={this.props.experience} />
      addform = <RenderNewExpForm text={text} renderNewExpForm={(e) => this.props.renderNewExpForm(e)}/>
  } else {
      addform = <RenderNewExpForm text={text} renderNewExpForm={(e) => this.props.renderNewExpForm(e)}/>

  }
    return (
      <div>
          {expform}
          {addform}
      </div>
    )
  }
}

export default ExperienceForms