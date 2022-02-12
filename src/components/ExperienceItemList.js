import React from 'react';
import ExperienceItem from './ExperienceItem';


const ExperienceItemList = props =>  {
        const experience = props.experience.map(item => {
            return <ExperienceItem item={item} />
        })
        if (experience.length !== 0) {
          return <div className='section-container'>{experience}</div>;
        } else {
          return <div></div>;
        }
    
}

export default ExperienceItemList;
