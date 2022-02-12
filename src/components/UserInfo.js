import React from "react";

const UserInfo = props => {

        return (
            <div className="section-container">
                <div className="field">
                    <label htmlFor="nameInput">Name</label>
                    <input type="text" onChange={props.handleChange}  id="nameInput" name="name" value={props.info.name}></input>
                </div>

                <div className="field">
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" onChange={props.handleChange}  id="emailInput" name="email" value={props.info.email}></input>
                </div>
 
                <div className="field">
                    <label htmlFor="phoneInput">Phone</label>
                    <input type="tel" onChange={props.handleChange} id="phoneInput" name="phone" value={props.info.phone}></input>
                </div>

            </div>
        );
}

export default UserInfo;