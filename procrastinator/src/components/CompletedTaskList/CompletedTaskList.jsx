import React from 'react';
import '../CompletedTaskList/CompletedTaskList.scss';
import { useComp } from '../../Hooks/useComp';
import DeleteButton from '../DeleteButton/DeleteButton';

const CompletedTaskList = () => {
    
    const {comp} = useComp('');
    return (
        <section className="completed">
            <div className="c-tasks">
                <h2>Completed</h2>
                <ul className="c-tasks__list">
                 {comp.map(task => (
                    <li key={`${task.id}`}>
                        {task.task}
                        <span>
                            <DeleteButton id={task.id} taskDesc={task.task} />
                        </span>
                    </li>
                 ))}
                </ul>
            </div>
        </section>
    )
}

export default CompletedTaskList;