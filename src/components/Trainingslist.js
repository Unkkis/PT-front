import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid'
import dayjs from 'dayjs'
import Deletetraining from './Deletetraining';


export default function Trainingslist() {

    const [trainings, setTrainings] = useState([]);


    useEffect( () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err));
    });

    const columns = [
        { field: 'id', headerName: 'Delete', width: 80,
        renderCell: row => <Deletetraining id={row.id} />},
        { field: 'date', headerName: 'Date', width: 150,
            renderCell: row => {
                const date = row.value
                return(
                   <div>{dayjs(date).format('DD.MM.YYYY HH:mm')}</div>
                )
            }
        },
        { field: 'duration', headerName: 'Duration', width: 150 },
        { field: 'activity', headerName: 'Workout type', width: 150 },
        { field: 'customer', headerName: 'Customer', width:450, 
        renderCell: row => (
            <div>
            {row.value.firstname} {row.value.lastname} (Phone: {row.value.phone} Email: {row.value.email})
            </div>
        )
        }        
    ]


    return (
        <div style={{height: 600, width: '90%'}}>
            <DataGrid 
                rows={trainings}
                columns={columns}
                getRowId={row => row.id}
                pageSize={8}
                rowsPerPageOptions={[8]}
            />
        </div>
    )
    

}