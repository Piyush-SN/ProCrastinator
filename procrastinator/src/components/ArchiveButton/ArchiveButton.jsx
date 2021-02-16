import React  from "react";
import './ArchiveButton.scss';
import { firebase } from "../../firebase";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Tooltip from '@material-ui/core/Tooltip';

const ArchiveButton = ({ id }) => {
    const archiveTask = () => {
      firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .update({ 
          archived: true,});
      };
  
return (
      <div>   
        <Tooltip title='Done'>
        <AssignmentTurnedInIcon className='archive-btn' fontSize="medium"
          onClick={() => archiveTask()}/>
        </Tooltip>
      </div>
    );
  };
  
  export default ArchiveButton;
