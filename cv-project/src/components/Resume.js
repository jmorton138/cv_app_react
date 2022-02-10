import React, { Component } from 'react';
import UserInfo from './UserInfo';
import EduInfo from './EduInfo';
import ExperienceItemList from './ExperienceItemList';

export default class Resume extends Component {
  
    render() {
        const education = this.props.info.education.map((edu) => {
            return <EduInfo education={edu} />
        });
    return (
        <div className="resume-container">
            <div className="field">
                <label htmlFor="name">Name</label>
                <div name="name">{this.props.info.name}</div>
            </div>
   
            <div className="field">
                <label htmlFor="email">Email</label>
                <div name="email">{this.props.info.email}</div>
            </div>

            <div className="field">
                <label htmlFor="phone">Phone</label>
                <div name="phone">{this.props.info.phone}</div>
            </div>
            {education}
            <ExperienceItemList experience={this.props.info.experience} />

            <button onClick={this.props.displayEditView}>Edit</button>
        </div>
    );
  }
}
