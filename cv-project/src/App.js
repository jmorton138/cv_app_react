import React, {Component} from "react";
import UserInfo from './components/UserInfo';
import EduInfoForm from "./components/EduInfoForm";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import './App.css'
import uuid from 'uuid';
import AddEduForm from "./components/AddEduForm";
import EducationForms from "./components/EducationForms";
import EducationList from "./components/EducationList";

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
          renderEduForm: false,

    }
    
}

  addEducation = (e, obj) => {
    e.preventDefault();
    this.setState({
      isSubmitted: false,
      renderEduForm: false,
      education: [...this.state.education, obj]
    })
  }

  newEduForm = (e) => {
    e.preventDefault();
    console.log(this.state.isSubmitted)
    this.setState({ renderEduForm: !this.state.renderEduForm })
}
  

  handleChange = (e) => {
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
    let eduform;
    const isSubmitted = this.state.isSubmitted;
    if (this.state.education.length === 0)  {
      eduform = <EduInfoForm addEducation={this.addEducation}/>
    } else {
      eduform = <EducationForms addEducation={this.addEducation} state={this.state} newEduForm={this.newEduForm}/>

    }

    if (isSubmitted) {
      content = <Resume info={this.state} displayEditView={this.displayEditView}/>
    }
    else {
      content = (
        <form onSubmit={this.handleSubmit}>
          <UserInfo handleChange={this.handleChange} info={this.state}/>
          <EducationList education={this.state.education} />
          {eduform}


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
