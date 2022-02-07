import React, { Component } from "react";

class UserInfo extends Component {
    constructor() {
        super()
        this.state = {
            info: {
                name: '',
                email: '',
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }

    handleChange = (e) => {
        this.setState({
            info: {
                ...this.state.info,
                [e.target.name]: e.target.value,
            
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.info);

    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input type="text" onChange={this.handleChange} value={this.state.info.name} id="nameInput" name="name"></input>
                    <input type="email" onChange={this.handleChange} value={this.state.info.email} id="emailInput" name="email"></input>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default UserInfo;