import React, { Component } from 'react';
import EducationForms from './EducationForms';
import UserInfo from './UserInfo';
import EduInfoForm from './EduInfoForm';
import EditEduForm from './EditEduForm';

class EditResume extends Component {
  render() {
    const eduinfoforms = this.props.info.education.map((edu) => {
      return <EditEduForm education={edu} handleChange={this.props.handleChange} editEducation={this.props.editEducation}/>
      
  });
    return (
        <div>
            <form onSubmit={this.props.handleSubmit}>
              <UserInfo handleChange={this.props.handleChange} info={this.props.info} />
              {eduinfoforms}
              <input type="submit"></input>

            </form>
        </div>
    )
  }
}

export default EditResume;
