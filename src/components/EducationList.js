import React, { Component } from 'react';
import EduInfo from './EduInfo';

class EducationList extends Component {
  render() {

    const education = this.props.education.map(edu => {
        return <EduInfo education={edu} />
    })
    if (education.length !== 0) {
      return <div className='section-container'>{education}</div>;
    } else {
      return <div></div>;
    }
  }
}

export default EducationList;
