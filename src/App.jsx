// @author: Amir Armion
// @version: V.01

import GoalForm from './GoalForm';
import ListOfGoals from './ListOfGoals';
import { useState } from 'react';
import './App.css';

function App() 
{
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) 
  {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div>
      <GoalForm addGoal={addGoal}/>
      <ListOfGoals allGoals={allGoals}/>
    </div>
  );
}

export default App;
