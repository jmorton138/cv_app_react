import React, { Component } from 'react';
import SaveExperienceBtn from './SaveExperienceBtn';

export class ExperienceItemForm extends Component {
  state = {
    position: this.props.experience.position,
    company: this.props.experience.school,
    startdate: this.props.experience.startdate,
    id:  this.props.experience.length,
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
            <input type="text" onChange={this.handleChange}  id="positionInput" name="position"></input>
        </div>

        <div className="field">
            <label htmlFor="companyInput">Company</label>
            <input type="text" onChange={this.handleChange}  id="companyInput" name="company"></input>
        </div>

        <div className="field">
            <label htmlFor="dateWorkInput">Start Date</label>
            <input type="date" onChange={this.handleChange} id="dateWorkInput" name="workdate"></input>
        </div>
        <SaveExperienceBtn obj={this.state} saveExpItem={this.props.saveExpItem} />
    </div>
    );
  }
}

export default ExperienceItemForm;
