import React from 'react';
import '../HowToPage/HowToPage.scss';

const HowToPage = () => {
  return (
    <div className="mainh">
            <section className="tasklisth">
                <div className="tasksh">
                    <h2>How to use this app!!</h2>
                    <p> Hi there, this app is a minimalist approach
                        to the 'To-Do Apps', designed for the people
                        who doesn't want to get confused with many features.
                        Instead, just want to focus on certain tasks on hand 
                        and improve their efficiency.                       
                    </p>
                    <p> At Homepage, there are two components, 
                        which shows 'Task List', and the Tasks which you have
                        already 'Completed'.  Completed section is included to 
                        give you an idea about your progress, and feeling of accomplishment. 
                        Which inturn will motivate you to be better and focus on the active
                        Tasks.                     
                    </p>
                    <p>
                        'Task List' section has a 'Done' icon. On clicking the icon, the task gets
                        removed from 'Task List' and added in 'Completed' section for your reference.
                    </p>
                    <p>Similarly, 'Completed' section has 'Delete' icons which on click, will remove 
                        the task from database.
                    </p>
                    <p>
                        Tooltips are provided wherever required!!
                    </p>
                    <h2>
                        Some tips on 'How to manage your tasks'. 
                    </h2>
                    <ol className="tasksh__listh">
                        <li >
                            Prioritize. Understandably, not everything on your to-do list needs to be done right away.
                        </li>
                        <li>
                            Exercise. Working out regularly is one of the best ways to relax your body and mind.
                        </li>
                        <li>
                            Be Patient. Believe in yourself, its just one more try away.
                        </li>
                        <li>
                            Deep Breathing. Relax yourself often. Keeping calm is the key.
                        </li>
                        <li>
                            Eat Well. Remember, healthy body has a healthy mind.
                        </li>
                        <li>
                            Take Breaks often. Take a walk. Call someone you planning to from a long time.
                        </li>
                        <li>
                            Be Flexible. 
                        </li>
                        <li>
                            Delegate
                        </li>
                        <li>
                            Be Involved.
                        </li>
                        <li>
                            Make Time for Hobbies.  
                        </li>
                    </ol>
                </div>
            </section>
        </div>         
)
}

export default HowToPage;
