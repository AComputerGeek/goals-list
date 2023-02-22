// @author: Amir Armion
// @version: V.01

import React from 'react';
import { v4 as uuidv4 } from "uuid";

function ListOfGoals({ allGoals }) 
{
  return(
    <div className='list'>
        <ul>
            {allGoals.map((goal) => <li key={uuidv4()}>My goal is to {goal.goal}, by {goal.by}</li>)}
        </ul>
    </div>
  );
}

export default ListOfGoals;
