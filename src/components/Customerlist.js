import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Deletecustomer from './Deletecustomer';
import Editcustomer from './Editcustomer';
import Addtraining from './Addtraining';
import SnackbarRenderer from './SnackbarRenderer';


function ExportToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  

export default function Customerlist() {

    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    useEffect( () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err));
    });

    const columns = [
        { field: '',
            headerName: 'Trainings',
            disableExport: true,
            sortable: false, 
            filterable: false,
            width: 100,
            renderCell: row =>
            <Addtraining link={row.id} customer={row.row} customers={customers} setMessage={setMessage} setOpen={setOpen}/>      
        },
        { field: 'links.self.href',
            headerName: 'Functions',
            disableExport: true,
            sortable: false, 
            filterable: false,
            width: 100,
            renderCell: row =>
            <div  style={{display: 'flex'}}>
                <Deletecustomer link={row.id} setMessage={setMessage} setOpen={setOpen}/>
                <Editcustomer link={row.id} customer={row.row} setMessage={setMessage} setOpen={setOpen} />
            </div>
        },        
        { field: 'firstname', headerName: 'Firstname', width: 100 },
        { field: 'lastname', headerName: 'Lastname', width: 100 },
        { field: 'streetaddress', headerName: 'Street', width: 150 },
        { field: 'postcode', headerName: 'ZIP', width: 80 },
        { field: 'city', headerName: 'City', width: 100 },
        { field: 'email', headerName: 'E-mail', width: 150 },
        { field: 'phone', headerName: 'Phone', width: 150 }
    ]

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    return (
        <div style={{display: 'flex', height: 600, width: '90%'}}>
            <DataGrid 
                rows={customers}
                columns={columns}
                getRowId={row => row.links[1].href}
                pageSize={8}
                rowsPerPageOptions={[8]}
                components={{
                    Toolbar: ExportToolbar,
                }}
            />
            <SnackbarRenderer open={open} handleClose={handleClose} message={message}  />

        </div>
    )
    

}