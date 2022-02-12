import React from 'react';
import EduInfo from './EduInfo';

const EducationList = props => {

    const education = props.education.map(edu => {
        return <EduInfo education={edu} />
    })
    if (education.length !== 0) {
      return <div className='section-container'>{education}</div>;
    } else {
      return <div></div>;
    }

}

export default EducationList;
