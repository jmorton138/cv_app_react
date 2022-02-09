import React, { Component } from 'react';

class EditEduForm extends Component {
    state = {
        school: this.props.education.school,
        major: '',
        startdate: '',
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
                    <input type="text" id="majorInput" onChange={this.props.handleChange} name="major" value={this.props.education.major} />
                </div>
                <div className="field">
                    <label htmlFor="dateStudyInput">Date of Study</label>
                    <input type="date" id="dateStudyInput" onChange={this.props.handleChange} name="startdate" value={this.props.education.startdate} />
                </div>
                <button onClick={(e) => this.props.editEducation(e, this.state)}>Save</button>
            </div>
        )
    }
}

export default EditEduForm;
