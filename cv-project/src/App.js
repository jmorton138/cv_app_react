import React, {Component} from "react";
import UserInfo from './components/UserInfo';
import EduInfo from "./components/EduInfo";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import './App.css'
import uuid from 'uuid';
import AddEdu from "./components/AddEdu";
import Education from "./components/Education";

class App extends Component {
  constructor() {
    super()
    this.state = {
          name: '',
          email: '',
          phone: '',
          education: [],
          experience: [],
          isSubmitted: false,
          displayEdit: false,

    }
    
}

  addEducation = (e, obj) => {
    e.preventDefault();
    this.setState({
      isSubmitted: false,
      education: [...this.state.education, obj]
    })
  }
  newEducation = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    console.log(this.state);

    this.setState({
          ...this.state.info,
          [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({isSubmitted: true})

  };

  displayEditView = (e) => {
    this.setState({
      displayEdit: !this.state.displayEdit,
      isSubmitted: !this.state.isSubmitted
    })
    console.log('edit');
  }


  render() {
    let content;
    const isSubmitted = this.state.isSubmitted;

    if (isSubmitted) {
      content = <Resume info={this.state} displayEditView={this.displayEditView}/>
    }
    else {
      content = (
        <form onSubmit={this.handleSubmit}>
          <UserInfo handleChange={this.handleChange} info={this.state}/>
          <Education education={this.state.education} addEducation={this.addEducation} />
          {/*<AddEdu newEducation={this.newEducation}/> */}
          {/* <Experience handleChange={this.handleChange} /> */}
          <div>
            <input type="submit"></input>

          </div>
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
