import React from 'react';
import EduInfoForm from './EduInfoForm';
import AddEduForm from './AddEduForm';
import EduInfo from './EduInfo';

const EducationForms =  props => {

    let eduform;
    let addform;
    let text;

    if (props.renderEduForm === false) {
        text = "Add new education";
    } else {
        text = "Cancel new education";
    }
    console.log(props)
    if (props.renderEduForm === true) {
        eduform = <EduInfoForm addEducation={props.addEducation} education={props.education} />
        addform = <AddEduForm text={text} newEduForm={(e) => props.newEduForm(e)}/>
    } else {
        addform = <AddEduForm text={text} newEduForm={(e) => props.newEduForm(e)}/>

    }

     
    return (
        <div>
            {eduform}
            {addform}

        </div>
    );
}

export default EducationForms;
