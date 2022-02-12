import React, { useState, useEffect } from 'react';

const EditEduForm = props => {

    const [school, setSchool] = useState(props.education.school);
    const [major, setMajor] = useState(props.education.major);
    const [startdate, setStartdate] = useState(props.education.startdate);
    const [id, setID] = useState(props.education.id);
    const [state, setState] = useState({ school, major, startdate, id });

 

        return (
            <div className="section-container">
                <div className="field">
                    <label htmlFor="schoolNameInput">School Name</label>
                    <input type="text" id="schoolNameInput" onChange={(e) => {setState({...state, school: e.target.value})}} name="school" defaultValue={school} />
                </div>
                <div className="field">
                    <label htmlFor="majorInput">Area of Study</label>
                    <input type="text" id="majorInput" onChange={(e) => {setState({...state, major: e.target.value})}} name="major" defaultValue={major} />
                </div>
                <div className="field">
                    <label htmlFor="dateStudyInput">Date of Study</label>
                    <input type="date" id="dateStudyInput" onChange={(e) => {setState({...state, startdate: e.target.value})}} name="startdate" defaultValue={startdate} />
                </div>
                <button onClick={(e) => props.editEducation(e, state)}>Save</button>
                
            </div>
        )
}

export default EditEduForm;
