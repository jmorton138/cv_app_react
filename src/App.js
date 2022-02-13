import React, { useState } from "react";
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
import ExperienceForms from "./components/ExperienceForms";
import ExperienceItemList from "./components/ExperienceItemList";

const App = () => {
// state = {
//           name: '',
//           email: '',
//           phone: '',
//           education: [],
//           experience: [],
//           isSubmitted: false,
//           displayEdit: false,
//           renderEduForm: false,
//           renderExpForm: false,

//     }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [renderEduForm, setRenderEduForm] = useState(false);
  const [renderExpForm, setRenderExpForm] = useState(false);
  const [state, setState] = useState({ name, email, education, experience, isSubmitted, displayEdit, renderEduForm, renderExpForm })
    

  const addEducation = (e, obj) => {
    e.preventDefault();
    setIsSubmitted(false);
    setRenderEduForm(false);
    setEducation([...education, obj])
  }

  const newEduForm = (e) => {
    e.preventDefault();
    setRenderEduForm(!renderEduForm)
  } 

  const renderNewExpForm = (e) => {
    e.preventDefault();
    setRenderExpForm(!renderExpForm)
    
  }


  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  };

  const editEducation = (e, obj) => {
    e.preventDefault();
    const id = obj.id;
    let list = education;
    let key = list[obj.id];
    list[id] = obj;
    setEducation(list)
 

  }


  const saveExpItem = (e, obj) => {
    e.preventDefault();
    const id = obj.id;
    let list = experience;
    let key = list[obj.id];
    list[id] = obj;
    setExperience(list);
    setIsSubmitted(false);
    setRenderExpForm(false);
    setState({ name, email, education, experience, isSubmitted, displayEdit, renderEduForm, renderExpForm })


  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setDisplayEdit(false);
    setState({ name, email, education, experience, isSubmitted, displayEdit, renderEduForm, renderExpForm })
 

  };

  const displayEditView = (e) => {
    setDisplayEdit(true);
  
  }


    let content;
    let eduform;
    let expform;
    const submitted = isSubmitted;
    const displayEditPage = displayEdit;
    if (education.length === 0)  {
      eduform = <EduInfoForm addEducation={addEducation} education={education} />
    } else {
      eduform = <EducationForms addEducation={addEducation} state={state} newEduForm={newEduForm} education={education} renderEduForm={renderEduForm}/>
    }

    if (experience.length === 0) {

      expform = <ExperienceItemForm experience={experience} saveExpItem={saveExpItem} />
    } else {

      expform = <ExperienceForms state={state} renderNewExpForm={renderNewExpForm} renderExpForm={renderExpForm} experience={experience} saveExpItem={saveExpItem}/>
    }

    if (submitted && !displayEditPage) {
      content = <Resume info={state} displayEditView={displayEditView}/>
    } else if (displayEditPage) {
      content = <EditResume info={state} handleChange={handleChange} handleSubmit={handleSubmit} editEducation ={editEducation} saveExpItem={saveExpItem}/>
    } else {
      content = (

        <form onSubmit={handleSubmit}>
          <UserInfo handleChange={handleChange} info={state}/>
          <EducationList education={education} />
          {eduform}
          <ExperienceItemList experience={experience} />
          {expform}
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

export default App;
