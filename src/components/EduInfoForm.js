import React, { useState, useEffect } from "react";

const EduInfoForm = props => {

    const [school, setSchool] = useState('');
    const [major, setMajor] = useState('');
    const [startdate, setStartdate] = useState('');
    const [id, setID] = useState(props.education.length);
    const [state, setState] = useState({ school, major, startdate, id });

    useEffect(() => {
        setState({ school, major, startdate, id })
    })

        return (
            <div className="section-container">
                <div className="field">
                    <label htmlFor="schoolNameInput">School Name</label>
                    <input type="text" id="schoolNameInput" onChange={(e) => setSchool(e.target.value)} name="school" value={props.education.school} />
                </div>
                <div className="field">
                    <label htmlFor="majorInput">Area of Study</label>
                    <input type="text" id="majorInput" onChange={(e) => setMajor(e.target.value)} name="major" value={props.education.major} />
                </div>
                <div className="field">
                    <label htmlFor="dateStudyInput">Date of Study</label>
                    <input type="date" id="dateStudyInput" onChange={(e) => setStartdate(e.target.value)} name="startdate" value={props.education.startdate} />
                </div>
                <button onClick={(e) => props.addEducation(e, state)}>Save</button>
            </div>
        )
}

export default EduInfoForm;