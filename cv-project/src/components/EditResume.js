import React, { Component } from 'react';
import EducationForms from './EducationForms';
import UserInfo from './UserInfo';

class EditResume extends Component {
  render() {
    return (
        <div>
            <UserInfo />
            <Education />
        </div>
    )
  }
}

export default EditResume;
