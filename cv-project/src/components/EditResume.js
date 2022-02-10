import React, { Component } from 'react';
import EducationForms from './EducationForms';
import UserInfo from './UserInfo';
import EduInfoForm from './EduInfoForm';
import EditEduForm from './EditEduForm';
import AddEduForm from './AddEduForm';
import ExperienceItemForm from './ExperienceItemForm';
import EditExperienceItemForm from './EditExperienceItemForm';

class EditResume extends Component {
  render() {
    const eduinfoforms = this.props.info.education.map((edu) => {
      return <EditEduForm education={edu} handleChange={this.props.handleChange} editEducation={this.props.editEducation}/>
      
    });
    const expitemforms = this.props.info.experience.map((exp) => {
      return <EditExperienceItemForm experience={exp} saveExpItem={this.props.saveExpItem}/>
    });

    return (
        <div>
            <form onSubmit={this.props.handleSubmit}>
              <UserInfo handleChange={this.props.handleChange} info={this.props.info} />
              {eduinfoforms}
              {expitemforms}
              <div className="button-container">
                <input type="submit"></input>
              </div>
            </form>
        </div>
    )
  }
}

export default EditResume;
