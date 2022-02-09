import React, { Component } from 'react';

class EduInfo extends Component {
  render() {
    return (
        <div className='section-container'>

            <div className="field">
                <label htmlFor="schoolname">School Name</label>
                <div name="schoolname">{this.props.education.school}</div>
            </div>
   
            <div className="field">
                <label htmlFor="major">Major</label>
                <div name="major">{this.props.education.major}</div>
            </div>

            <div className="field">
                <label htmlFor="schooldate">School Date</label>
                <div name="schooldate">{this.props.education.startdate}</div>
            </div>
        </div>
    )
  }
}

export default EduInfo;
