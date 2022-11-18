import React from "react";
import Button from '@mui/material/Button';

export default function Deletetraining(props) {
  
    const deleteTraining = () => {
        if (window.confirm('Are you sure?')){
            fetch(`https://customerrest.herokuapp.com/api/trainings/${props.id}`, {method: 'DELETE'})
            .catch(err => console.error(err))
        }
    };
 
    return (
    
      <span>
        <Button variant="contained" color="error" size="small" onClick={() => deleteTraining()}>Delete</Button>
      </span>
      
    );
};