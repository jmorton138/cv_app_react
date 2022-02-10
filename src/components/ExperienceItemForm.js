import React, { Component } from 'react';
import SaveExperienceBtn from './SaveExperienceBtn';

export class ExperienceItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: '',
      company: '',
      startdate: '',
      id: props.experience.length,
    }


  }

  
  
  handleChange = (e) => {
    this.setState(() => ({ 
        ...this.state,
        [e.target.name]: e.target.value,
    }))

}

  render() {
    return (
        <div className="section-container">
        <div className="field">
            <label htmlFor="position">Postion</label>
            <input type="text" onChange={this.handleChange}  id="positionInput" name="position" defaultValue={this.props.experience.position}></input>
        </div>

        <div className="field">
            <label htmlFor="companyInput">Company</label>
            <input type="text" onChange={this.handleChange}  id="companyInput" name="company" defaultValue={this.props.experience.company}></input>
        </div>

        <div className="field">
            <label htmlFor="dateWorkInput">Start Date</label>
            <input type="date" onChange={this.handleChange} id="dateWorkInput" name="workdate" defaultValue={this.props.experience.startdate}></input>
        </div>
        <SaveExperienceBtn obj={this.state} saveExpItem={this.props.saveExpItem} />
    </div>
    );
  }
}

export default ExperienceItemForm;
