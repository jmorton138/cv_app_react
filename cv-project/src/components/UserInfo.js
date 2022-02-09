import React, { Component } from "react";

class UserInfo extends Component {


    render() {
        return (
            <div className="section-container">
                <div className="field">
                    <label htmlFor="nameInput">Name</label>
                    <input type="text" onChange={this.props.handleChange}  id="nameInput" name="name" value={this.props.info.name}></input>
                </div>

                <div className="field">
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" onChange={this.props.handleChange}  id="emailInput" name="email" value={this.props.info.email}></input>
                </div>
 
                <div className="field">
                    <label htmlFor="phoneInput">Phone</label>
                    <input type="tel" onChange={this.props.handleChange} id="phoneInput" name="phone" value={this.props.info.phone}></input>
                </div>

            </div>
        );
    }
}

export default UserInfo;