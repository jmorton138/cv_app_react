import React, { Component } from 'react';
import EduInfo from './EduInfo';
class EducationList extends Component {
  render() {

    const education = this.props.education.map(edu => {
        return <EduInfo education={edu} />
    })
    return <div>{education}</div>;
  }
}

export default EducationList;
