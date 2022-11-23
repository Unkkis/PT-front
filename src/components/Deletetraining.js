import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Deletetraining(props) {
  
    const deleteTraining = () => {
        if (window.confirm('Are you sure you want to delete training?')){
            fetch(`https://customerrest.herokuapp.com/api/trainings/${props.id}`, {method: 'DELETE'})
            .catch(err => console.error(err))
        }
    };
 
    return (
    
      <span>
        <IconButton aria-label="delete" onClick={() => deleteTraining()}><DeleteIcon /></IconButton>
      </span>
      
    );
};