import React from 'react';
import EducationForms from './EducationForms';
import UserInfo from './UserInfo';
import EduInfoForm from './EduInfoForm';
import EditEduForm from './EditEduForm';
import AddEduForm from './AddEduForm';
import ExperienceItemForm from './ExperienceItemForm';
import EditExperienceItemForm from './EditExperienceItemForm';

const EditResume = props => {

    const eduinfoforms = props.info.education.map((edu) => {
      return <EditEduForm education={edu} handleChange={props.handleChange} editEducation={props.editEducation}/>
      
    });
    const expitemforms = props.info.experience.map((exp) => {
      return <EditExperienceItemForm experience={exp} saveExpItem={props.saveExpItem}/>
    });

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
              <UserInfo handleChange={props.handleChange} info={props.info} />
              {eduinfoforms}
              {expitemforms}
              <div className="button-container">
                <input type="submit"></input>
              </div>
            </form>
        </div>
    )
  }


export default EditResume;
