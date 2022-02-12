import React from 'react';

const RenderNewExpForm = props => {

    return (
        <div className='button-container'>
            <button onClick={(e) => props.renderNewExpForm(e)}>{props.text}</button>
        </div>
    )
}

export default RenderNewExpForm;
