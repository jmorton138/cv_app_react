import React from 'react';
import UserInfo from './UserInfo';
import EduInfo from './EduInfo';
import ExperienceItemList from './ExperienceItemList';
import ExperienceItem from './ExperienceItem';

const Resume = props => {

        const education = props.info.education.map((edu) => {
            return (
            <div className='resume-section'>
                <EduInfo education={edu} />
            </div>
            )
        });
        const experience = props.info.experience.map(item => {
            return (
                <div className='resume-section'>
                    <ExperienceItem item={item} />
                </div>
            )
            
        })
    return (
        <div className="resume-container">
            <div className="field">
                <label htmlFor="name">Name</label>
                <div name="name">{props.info.name}</div>
            </div>
   
            <div className="field">
                <label htmlFor="email">Email</label>
                <div name="email">{props.info.email}</div>
            </div>

            <div className="field">
                <label htmlFor="phone">Phone</label>
                <div name="phone">{props.info.phone}</div>
            </div>
            {education}
            {experience}
            <button onClick={props.displayEditView}>Edit</button>
        </div>
    );
}

export default Resume;
