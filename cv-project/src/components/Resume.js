import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <div name="name">{this.props.info.name}</div>
            </div>
   
            <div>
                <label htmlFor="email">Email</label>
                <div name="email">{this.props.info.email}</div>
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <div name="phone">{this.props.info.phone}</div>
            </div>

            <div>
                <label htmlFor="schoolname">School Name</label>
                <div name="schoolname">{this.props.info.school}</div>
            </div>
   
            <div>
                <label htmlFor="major">Major</label>
                <div name="major">{this.props.info.major}</div>
            </div>

            <div>
                <label htmlFor="schooldate">School Date</label>
                <div name="schooldate">{this.props.info.schooldate}</div>
            </div>

        </div>
    );
  }
}
