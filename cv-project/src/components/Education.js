import React, { Component } from 'react';
import EduInfo from './EduInfo';

class Education extends Component {


  render() {
    let education;
    if (this.props.education.length === 0) {
        education = <EduInfo addEducation={this.props.addEducation}/>

    } else {
        education = this.props.education.map(edu => {
            return <EduInfo addEducation={this.props.addEducation}/>
        })
    } 
    return (
        <div>
            {education}
        </div>
    );
  }
}

export default Education;
