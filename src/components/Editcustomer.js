import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Editcustomer(props) {

    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        streetaddress: '',
        postcode: '',
        city: ''
    })

    const handleInputChange = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value })
    }

    //for opening the form
    const handleClickOpen = () => {
        setCustomer({
            firstname: props.customer.firstname,
            lastname: props.customer.lastname,
            email: props.customer.email,
            phone: props.customer.phone,
            streetaddress: props.customer.streetaddress,
            postcode: props.customer.postcode,
            city: props.customer.city
        })
        setOpen(true);
      };
    //for closing the form
      const handleClose = () => {
        setOpen(false);
      };

      const updateCustomer = () => {
        fetch(props.link, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(response => {
            if (response.ok) {
              props.setMessage("Customer edited");
              props.setOpen(true);
            }
            else {
              props.setMessage("Something went wrong, customer not edited");
              props.setOpen(true);
            }
          })
        .catch(err => console.error(err))
        handleClose();
      }

    return (
        <div>
            <Button onClick={handleClickOpen} variant="contained" size="small" >Edit</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit customer details</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="firstname"
                        label="First Name"
                        value={customer.firstname}
                        onChange={event => handleInputChange(event)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="lastname"
                        label="Last Name"
                        value={customer.lastname}
                        onChange={event => handleInputChange(event)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email Address"
                        value={customer.email}
                        onChange={event => handleInputChange(event)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone Number"
                        value={customer.phone}
                        onChange={event => handleInputChange(event)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="streetaddress"
                        label="Street Address"
                        value={customer.streetaddress}
                        onChange={event => handleInputChange(event)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="postcode"
                        label="Postal Code"
                        value={customer.postcode}
                        onChange={event => handleInputChange(event)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="city"
                        label="City"
                        value={customer.city}
                        onChange={event => handleInputChange(event)}
                        fullWidth
                        variant="standard"
                    />
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={updateCustomer}>Edit customer</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
};