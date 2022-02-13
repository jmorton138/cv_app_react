import React from 'react';

const EduInfo = props => {

    return (
        <div >
            <div className="field">
                <label htmlFor="schoolname">School Name</label>
                <div name="schoolname">{props.education.school}</div>
            </div>
   
            <div className="field">
                <label htmlFor="major">Major</label>
                <div name="major">{props.education.major}</div>
            </div>

            <div className="field">
                <label htmlFor="schooldate">School Date</label>
                <div name="schooldate">{props.education.startdate}</div>
            </div>
        </div>
    )
  
}

export default EduInfo;
