import React from 'react';
import EduInfo from './EduInfo';

const EducationList = props => {

  const array = Array.from(props.education)

    const education = array.map(edu => {
        return <EduInfo education={edu} />
    })
    if (education.length !== 0) {
      return <div className='section-container'>{education}</div>;
    } else {
      return <div></div>;
    }

}

export default EducationList;
