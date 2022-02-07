import React, {Component} from "react";
import UserInfo from './components/UserInfo';
import EduInfo from "./components/EduInfo";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

class App extends Component {
  constructor() {
    super()
    this.state = {
        info: {
            name: '',
            email: '',
            phone: '',
            school: '',
            major: '',
            schooldate: '',
            position: '',
            company: '',
            workdate: '',
            },
            isSubmitted: false,

    };

    
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
    this.setState({isSubmitted: true})
    console.log(this.state);

  };

  render() {
    let content;
    const isSubmitted = this.state.isSubmitted;

    if (isSubmitted) {
      content = <Resume info={this.state.info} />
    }
    else {
      content = (
        <form onSubmit={this.handleSubmit}>
          <UserInfo handleChange={this.handleChange} />
          <EduInfo handleChange={this.handleChange} />
          <Experience handleChange={this.handleChange} />
          <input type="submit"></input>
        </form>
      );
    }
    return (
      <div>
        {content}
      </div>
  
    );
  }

}

export default App;
