import React, {Component} from "react";
import UserInfo from './components/UserInfo';
import EduInfoForm from "./components/EduInfoForm";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import './App.css'
import uuid from 'uuid';
import AddEduForm from "./components/AddEduForm";
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
          

    }
    
}

  addEducation = (e, obj) => {
    e.preventDefault();
    this.setState({
      isSubmitted: false,
      education: [...this.state.education, obj]
    })
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
          {/* <EduInfo addEducation={this.addEducation}/> */}


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
