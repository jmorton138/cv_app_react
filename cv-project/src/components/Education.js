import React, { Component } from 'react';
import EduInfoForm from './EduInfoForm';
import AddEduForm from './AddEduForm';
import EduInfo from '../EduInfo';

class Education extends Component {
    state = {
        renderForm: false,
    }
    newEduForm = (e) => {
        e.preventDefault();
        this.setState({ renderForm: !this.state.renderForm })
    }

  render() {
    let education;
    let eduform;
    let addform;
    let text;

    education = this.props.education.map(edu => {
        return <EduInfo education={edu}/>
    })



    if (this.state.renderForm === false) {
        text = "Add new education";
    } else {
        text = "Cancel new education";
    }

    if (education.length === 0)  {
        eduform = <EduInfoForm addEducation={this.props.addEducation}/>

    } else if (this.state.renderForm === true) {
        eduform = <EduInfoForm addEducation={this.props.addEducation}/>
        addform = <AddEduForm text={text} newEduForm={(e) => this.newEduForm(e)}/>
    } else {
        addform = <AddEduForm text={text} newEduForm={(e) => this.newEduForm(e)}/>

    }



     
    return (
        <div>
            {education}
            {eduform}
            {addform}

        </div>
    );
  }
}

export default Education;
