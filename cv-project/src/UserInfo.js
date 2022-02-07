import React, {Component} from "react";

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {
                name: "",
                email: "",
                phone: "",
            },
        }
        this.handleChange = this.handleChange.bind(this);

        
    }

    handleChange = (e) => {
        this.setState({
            info: {
                name: e.target.value,
            
            },
        })
    }

    render() {
        return(
            <div>
                <form>
                    <input type="text" onChange={this.handleChange} value={this.state.info.name}></input>
                    <input type="submit">submit</input>
                </form>
            </div>
        );
    }
}

export default UserInfo;