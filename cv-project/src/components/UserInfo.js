import React, { Component } from "react";

class UserInfo extends Component {


    render() {
        return (
            <div>
                <div>
                    <label htmlFor="nameInput">Name</label>
                    <input type="text" onChange={this.props.handleChange}  id="nameInput" name="name" value={this.props.info.name}></input>
                </div>

                <div>
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" onChange={this.props.handleChange}  id="emailInput" name="email"></input>
                </div>
 
                <div>
                    <label htmlFor="phoneInput">Phone</label>
                    <input type="tel" onChange={this.props.handleChange} id="phoneInput" name="phone"></input>
                </div>

            </div>
        );
    }
}

export default UserInfo;