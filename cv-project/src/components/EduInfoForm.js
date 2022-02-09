import React, { Component } from "react";

class EduInfoForm extends Component {
    state = {
        school: '',
        major: '',
        startdate: '',
        id: this.props.education.length,
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
                    <label htmlFor="schoolNameInput">School Name</label>
                    <input type="text" id="schoolNameInput" onChange={this.handleChange} name="school" value={this.props.education.school} />
                </div>
                <div className="field">
                    <label htmlFor="majorInput">Area of Study</label>
                    <input type="text" id="majorInput" onChange={this.handleChange} name="major" value={this.props.education.major} />
                </div>
                <div className="field">
                    <label htmlFor="dateStudyInput">Date of Study</label>
                    <input type="date" id="dateStudyInput" onChange={this.handleChange} name="startdate" value={this.props.education.startdate} />
                </div>
                <button onClick={(e) => this.props.addEducation(e, this.state)}>Save</button>
            </div>
        )
    }
}

export default EduInfoForm;