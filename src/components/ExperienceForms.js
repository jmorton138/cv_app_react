import React from 'react'
import ExperienceItemForm from './ExperienceItemForm';
import RenderNewExpForm from './RenderNewExpForm';

const ExperienceForms = props => {
    let addform;
    let expform;
    let text;

    if (props.renderExpForm === false) {
      text = "Add new experience";
    } else {
      text = "Cancel new experience";
    }

    if (props.renderExpForm === true) {
        expform = <ExperienceItemForm  experience={props.experience} saveExpItem={props.saveExpItem}/>
        addform = <RenderNewExpForm text={text} renderNewExpForm={props.renderNewExpForm}/>
    } else {
        addform = <RenderNewExpForm text={text} renderNewExpForm={props.renderNewExpForm}/>

    }
    return (
      <div>
          {expform}
          {addform}
      </div>
    )

}

export default ExperienceForms