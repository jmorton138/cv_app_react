import React, { Component } from 'react';
import EduInfoForm from './EduInfoForm';
import AddEduForm from './AddEduForm';
import EduInfo from './EduInfo';

class EducationForms extends Component {


  render() {
    let eduform;
    let addform;
    let text;



    if (this.props.state.renderEduForm === false) {
        text = "Add new education";
    } else {
        text = "Cancel new education";
    }

    if (this.props.state.renderEduForm === true) {
        eduform = <EduInfoForm addEducation={this.props.addEducation}/>
        addform = <AddEduForm text={text} newEduForm={(e) => this.props.newEduForm(e)}/>
    } else {
        addform = <AddEduForm text={text} newEduForm={(e) => this.props.newEduForm(e)}/>

    }

     
    return (
        <div>
            {eduform}
            {addform}

        </div>
    );
  }
}

export default EducationForms;
