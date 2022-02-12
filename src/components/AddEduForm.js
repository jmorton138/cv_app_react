import React, { Component } from 'react';

const AddEduForm = props => {
    return (
    <div className='button-container'>
        <button onClick={(e) => props.newEduForm(e)}>{props.text}</button>
    </div>
    )
}

export default AddEduForm;
