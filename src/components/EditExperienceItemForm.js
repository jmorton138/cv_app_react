import React, { useState, useEffect } from 'react';
import SaveExperienceBtn from './SaveExperienceBtn';

const EditExperienceItemForm = props => {

  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [startdate, setStartdate] = useState('');
  const [id, setID] = useState(props.experience.id)
  const [state, setState] = useState({ position, company, startdate, id });




    return (
        <div className="section-container">
        <div className="field">
            <label htmlFor="position">Postion</label>
            <input type="text" onChange={(e) => {setState({...state, position: e.target.value})}}  id="positionInput" name="position" defaultValue={props.experience.position}></input>
        </div>

        <div className="field">
            <label htmlFor="companyInput">Company</label>
            <input type="text" onChange={(e) => {setState({...state, company: e.target.value})}}  id="companyInput" name="company" defaultValue={props.experience.company}></input>
        </div>

        <div className="field">
            <label htmlFor="dateWorkInput">Start Date</label>
            <input type="date" onChange={(e) => {setState({...state, startdate: e.target.value})}} id="dateWorkInput" name="workdate" defaultValue={props.experience.startdate}></input>
        </div>
        <SaveExperienceBtn obj={state} saveExpItem={props.saveExpItem} />
    </div>
    );
}

export default EditExperienceItemForm;
