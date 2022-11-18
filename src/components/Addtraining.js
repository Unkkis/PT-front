import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DialogContentText } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/de';


export default function Addtraining(props) {

    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState({
        date: '',
        activity: '',
        duration: '',
        customer: props.link
    })

    const handleInputChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value })
    }

    const [value, setValue] = useState(dayjs());
    const handleDateChange = (newValue) => {
        setValue(newValue);
        setTraining({...training, date: dayjs(newValue).format('YYYY-MM-DDTHH:mm:ssZ')})
    }

    //for opening the form
    const handleClickOpen = () => {
        setOpen(true);
      };
    //for closing the form
      const handleClose = () => {
        setOpen(false);
      };

      const addTraining = () => {
        
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(training)
        })
        .then(response => {
            if (response.ok) {
              props.setMessage("Training added");
              props.setOpen(true);
            }
            else {
              props.setMessage("Something went wrong, Training not added");
              props.setOpen(true);
            }
        })
        .catch(err => console.error(err))
        handleClose();
      }

    return (
        <div>
            <Button onClick={handleClickOpen} variant="contained" size="small" >Add Training</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new training</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        for customer {props.customer.firstname} {props.customer.lastname}
                    </DialogContentText>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'de'}>
                        <DateTimePicker
                            margin="normal"
                            name="date"           
                            label="Date and time"
                            value={value}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} />}
                            disablePast="true"
                        />
                    </LocalizationProvider>
                    <TextField
                        margin="dense"
                        name="activity"
                        label="Activity"
                        value={training.activity}
                        onChange={event => handleInputChange(event)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="duration"
                        label="Duration"
                        value={training.duration}
                        onChange={event => handleInputChange(event)}
                        fullWidth
                        variant="standard"
                    />
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addTraining}>Add</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
};