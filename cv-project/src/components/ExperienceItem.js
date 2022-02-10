import React, { Component } from 'react';

class ExperienceItem extends Component {
  render() {
        <div >
            <div className="field">
                <label htmlFor="schoolname">Position</label>
                <div name="schoolname">{this.props.item.position}</div>
            </div>

            <div className="field">
                <label htmlFor="major">Company</label>
                <div name="major">{this.props.item.company}</div>
            </div>

            <div className="field">
                <label htmlFor="schooldate">Start date</label>
                <div name="schooldate">{this.props.item.startdate}</div>
            </div>
        </div>
  }
}

export default ExperienceItem;
