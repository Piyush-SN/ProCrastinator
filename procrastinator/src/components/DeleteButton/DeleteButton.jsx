import React  from "react";
import '../DeleteButton/DeleteButton.scss';
import { firebase } from "../../firebase";
import Tooltip from '@material-ui/core/Tooltip';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const DeleteButton = ({ id }) => {
    const deleteTask = () => {
      firebase.firestore().collection('tasks').doc(id).delete();
    };
  
    return (
      
      <div>
         <Tooltip title='Done'>
            <DeleteRoundedIcon className="delete-btn" fontSize="medium" 
              onClick={() => deleteTask()}/>
         </Tooltip>
      </div>
    );
  };
  
export default DeleteButton;