import React from "react";
import { IconButton } from "@mui/material";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';


export default function Deletecustomer(props) {
  
    const deleteCustomer = () => {
        if (window.confirm('Are you sure you want to delete customer?')){
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
        <IconButton aria-label="delete" onClick={() => deleteCustomer()}><PersonRemoveIcon /></IconButton>
      </span>
      
    );
};