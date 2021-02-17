import React from 'react'
import ArchiveButton from '../ArchiveButton/ArchiveButton';
import { useTasks } from '../../Hooks/useTasks';
import  AddTask  from '../AddTask/AddTask';
import '../TaskList/TaskList.scss'
import CompletedTaskList from "../CompletedTaskList/CompletedTaskList";

const TaskList = () => {
    
    const {tasks} = useTasks('');
    return (
        <div className="main">
            <section className="tasklist">
                <div className="tasks">
                    <h2>Task List</h2>
                    <ul className="tasks__list">
                        {tasks.map(task => (
                        <li key={`${task.id}`}>
                            {task.task}
                            <span>
                            <ArchiveButton id={task.id} taskDesc={task.task}/>
                            </span>
                        </li>
                        ))}
                    </ul>
                    <AddTask/>
                </div>
            </section>
            <CompletedTaskList/>
        </div>         
    )
}

export default TaskList;