import React from 'react';

const ExperienceItem = props => {
      return (
        <div >
            <div className="field">
                <label htmlFor="schoolname">Position</label>
                <div name="schoolname">{props.item.position}</div>
            </div>

            <div className="field">
                <label htmlFor="major">Company</label>
                <div name="major">{props.item.company}</div>
            </div>

            <div className="field">
                <label htmlFor="schooldate">Start date</label>
                <div name="schooldate">{props.item.startdate}</div>
            </div>
        </div>
      )
}

export default ExperienceItem;
