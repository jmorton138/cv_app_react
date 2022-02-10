import React, {Component} from "react";
import UserInfo from './components/UserInfo';
import EduInfoForm from "./components/EduInfoForm";
import ExperienceItemForm from "./components/ExperienceItemForm";
import Resume from "./components/Resume";
import './App.css'
import uuid from 'uuid';
import AddEduForm from "./components/AddEduForm";
import EducationForms from "./components/EducationForms";
import EducationList from "./components/EducationList";
import EditResume from "./components/EditResume";

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
    console.log(e);
    this.setState({
          ...this.state.info,
          [e.target.name]: e.target.value,
    });
  };

  editEducation = (e, obj) => {
    e.preventDefault();
    const id = obj.id;
    let list = this.state.education;
    let key = list[obj.id];
    list[id] = obj;
    this.setState({
      education: list,
    })
    console.log(this.state);

  }


  saveExpItem = (e, obj) => {
    e.preventDefault();
    const id = obj.id;
    let list = this.state.experience;
    let key = list[obj.id];
    list[id] = obj;
    this.setState({
      experience: list,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmitted: true,
      displayEdit: false,
    })

  };

  displayEditView = (e) => {
    this.setState({
      displayEdit: true,
      // isSubmitted: !this.state.isSubmitted
    })
    console.log('edit');
  }


  render() {
    let content;
    let eduform;
    const isSubmitted = this.state.isSubmitted;
    const displayEdit = this.state.displayEdit;
    if (this.state.education.length === 0)  {
      eduform = <EduInfoForm addEducation={this.addEducation} education={this.state.education} />
    } else {
      eduform = <EducationForms addEducation={this.addEducation} state={this.state} newEduForm={this.newEduForm} education={this.state.education}/>

    }

    if (isSubmitted && !displayEdit) {
      content = <Resume info={this.state} displayEditView={this.displayEditView}/>
    } else if (displayEdit) {
      content = <EditResume info={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editEducation ={this.editEducation} />
    } else {
      content = (
        <form onSubmit={this.handleSubmit}>
          <UserInfo handleChange={this.handleChange} info={this.state}/>
          <EducationList education={this.state.education} />
          {eduform}
          <ExperienceItemForm experience={this.state.experience} saveExpItem={this.saveExpItem} />
          <div className="button-container">
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
