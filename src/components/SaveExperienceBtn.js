import React from 'react';

const SaveExperienceBtn = props => {
    const obj = props.obj;
    return (
            <button onClick={(e) => props.saveExpItem(e, obj)}>Save</button>
    )
}

export default SaveExperienceBtn;
