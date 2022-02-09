import React, { Component } from 'react';

class EditEduForm extends Component {
    state = {
        school: this.props.education.school,
        major: this.props.education.major,
        startdate: this.props.education.startdate,
        id: this.props.education.id,
    }

    handleChange = (e) => {
        console.log(this.state.id);
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
                    <input type="text" id="schoolNameInput" onChange={this.handleChange} name="school" value={this.state.school} />
                </div>
                <div className="field">
                    <label htmlFor="majorInput">Area of Study</label>
                    <input type="text" id="majorInput" onChange={this.handleChange} name="major" value={this.state.major} />
                </div>
                <div className="field">
                    <label htmlFor="dateStudyInput">Date of Study</label>
                    <input type="date" id="dateStudyInput" onChange={this.handleChange} name="startdate" value={this.state.startdate} />
                </div>
                <button onClick={(e) => this.props.editEducation(e, this.state)}>Save</button>
            </div>
        )
    }
}

export default EditEduForm;
