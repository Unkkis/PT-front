import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Addcustomer() {

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
        setOpen(true);
      };
    //for closing the form
      const handleClose = () => {
        setOpen(false);
      };

      const addCustomer = () => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .catch(err => console.error(err))
        handleClose();
      }

    return (
        <div>
            <Button onClick={handleClickOpen} sx={{ my: 2, color: 'white', display: 'block' }} >New Customer</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new customer</DialogTitle>
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
                    <Button onClick={addCustomer}>Submit</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
};