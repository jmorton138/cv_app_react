import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';


class ExperienceItemList extends Component {
  render() {
        const experience = this.props.experience.map(item => {
            return <ExperienceItem item={item} />
        })
        if (experience.length !== 0) {
        return <div className='section-container'>{experience}</div>;
        } else {
        return <div></div>;
        }
    
  }
}

export default ExperienceItemList;
