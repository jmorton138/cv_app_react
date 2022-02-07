import React, { Component } from "react";

class EduInfo extends Component {

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="schoolNameInput">School Name</label>
                    <input type="text" id="schoolNameInput" onChange={this.props.handleChange} name="school" />
                </div>
                <div>
                    <label htmlFor="majorInput">Area of Study</label>
                    <input type="text" id="majorInput" onChange={this.props.handleChange} name="major" />
                </div>
                <div>
                    <label htmlFor="dateStudyInput">Date of Study</label>
                    <input type="date" id="dateStudyInput" onChange={this.props.handleChange} name="schooldate" />
                </div>
            </div>
        )
    }
}

export default EduInfo;