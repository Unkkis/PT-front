import React from "react";
import Button from '@mui/material/Button';

export default function Deletecustomer(props) {
  
    const deleteCustomer = () => {
        if (window.confirm('Are you sure?')){
            fetch(props.link, {method: 'DELETE'})
            .then(response => {
              if (response.ok) {
                props.setMessage("Customer deleted");
                props.setOpen(true);
              }
              else {
                props.setMessage("Something went wrong, customer not deleted");
                props.setOpen(true);
              }
            })
            .catch(err => console.error(err))

        }
    };
 
    return (
    
      <span>
        <Button variant="contained" color="error" size="small" onClick={() => deleteCustomer()}>Delete</Button>
      </span>
      
    );
};