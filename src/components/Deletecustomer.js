import React from "react";
import Button from '@mui/material/Button';

export default function Deletecustomer(props) {
  
    const deleteCustomer = () => {
        if (window.confirm('Are you sure?')){
            fetch(props.link, {method: 'DELETE'})
            .catch(err => console.error(err))
        }
    };
 
    return (
    
      <span>
        <Button variant="contained" color="error" size="small" onClick={() => deleteCustomer()}>Delete</Button>
      </span>
      
    );
};