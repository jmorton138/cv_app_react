import React, { Component } from 'react';

export class Experience extends Component {
  render() {
    return (
        <div>
        <div>
            <label htmlFor="position">Postion</label>
            <input type="text" onChange={this.props.handleChange}  id="positionInput" name="position"></input>
        </div>

        <div>
            <label htmlFor="companyInput">Company</label>
            <input type="text" onChange={this.props.handleChange}  id="companyInput" name="company"></input>
        </div>

        <div>
            <label htmlFor="dateWorkInput">Phone</label>
            <input type="date" onChange={this.props.handleChange} id="dateWorkInput" name="workdate"></input>
        </div>

    </div>
    );
  }
}

export default Experience;
