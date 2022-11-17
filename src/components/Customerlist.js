import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid'


export default function Customerlist() {

    const [customers, setCustomers] = useState([]);

    useEffect( () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err));
    });

    const columns = [
        { field: 'firstname', headerName: 'Firstname', width: 150 },
        { field: 'lastname', headerName: 'Lastname', width: 150 },
        { field: 'streetaddress', headerName: 'Street', width: 150 },
        { field: 'postcode', headerName: 'ZIP', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'email', headerName: 'E-mail', width: 150 },
        { field: 'phone', headerName: 'Phone', width: 150 }

    ]


    return (
        <div style={{height: 500, width: '80%'}}>
            <DataGrid 
                rows={customers}
                columns={columns}
                getRowId={row => row.links[1].href}
                pageSize={7}
                rowsPerPageOptions={[7]}
            />
        </div>
    )
    

}