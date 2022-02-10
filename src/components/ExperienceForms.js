import React, { Component } from 'react'
import ExperienceItemForm from './ExperienceItemForm';
import RenderNewExpForm from './RenderNewExpForm';

class ExperienceForms extends Component {
  render() {
    let addform;
    let expform;
    let text;

    if (this.props.state.renderExpForm === false) {
      text = "Add new experience";
    } else {
      console.log(this.props.state)
      text = "Cancel new experience";
    }

    if (this.props.state.renderExpForm === true) {
        expform = <ExperienceItemForm  experience={this.props.experience} saveExpItem={this.props.saveExpItem}/>
        addform = <RenderNewExpForm text={text} renderNewExpForm={this.props.renderNewExpForm}/>
    } else {
        addform = <RenderNewExpForm text={text} renderNewExpForm={this.props.renderNewExpForm}/>

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