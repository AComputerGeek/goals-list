// @author: Amir Armion
// @version: V.01

import React from 'react';
import { useState } from 'react';

function GoalForm({ addGoal }) 
{
    const [formData, setFormData] = useState(
        {
            goal:"",
            by:""
        }
    );

    function changeHandler(e)
    {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function submitHandler(e)
    {
        e.preventDefault();
        addGoal(formData);
        setFormData(
            { 
                goal:"",
                by: ""
            }
        );
    }

    return(
        <div>
            <h1>Goals List:</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name='goal' placeholder='Goal...' value={formData.goal} onChange={changeHandler}/>
                <input type="text" name='by' placeholder='By...' value={formData.by} onChange={changeHandler}/>
                <div>
                    <button>Submit the Goal</button>
                </div>
            </form>
        </div>
    );
}

export default GoalForm;
