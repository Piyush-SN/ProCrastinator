import React, { useState } from 'react';
import '../AddTask/AddTask.scss';
import moment from 'moment';
import { firebase } from '../../firebase';

const AddTask = () => {
  const [task, setTask] = useState('');
  const [inputField, setInputField] = useState(false);

  const addTask = () => {
    let saveDate = '';
      saveDate = moment().add(7, 'days').format('DD/MM/YYYY');
    
  return (
      task &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          archived: false,
          task,
          date: saveDate,
          userId: 'piyush1',
        })
        .then(() => {
          setTask('');
          setInputField('');
        })
    );
  };

  return (
    <div className='add-task'>
       
       <div className="add-task__pointer"
          onClick={() => setInputField(!inputField)}>
          <span className="add-task__plus-sign">+</span>
          <span className="add-task__text">Add Task</span>
        </div> 

      {(inputField) && (
        <div className="add-task__main">
          <>
            <div>
              <span className="add-task__cancel-x"
                onClick={() => {setInputField(false);}}>
              </span>
            </div>
          </>
           
          <input className="add-task__input" type="text" value={task}
            onChange={e => setTask(e.target.value)}/>
          <button type="button" className="add-task__submit"
            onClick={() =>  addTask()}>
              Add Task
          </button>
            
          {(
            <span>
              <button className="add-task__cancel"
              onClick={() => { setInputField(false);
              }}>
                Cancel
              </button>
             </span>
           )}
        </div>
      )}
    </div>
   );
 };

 export default AddTask;