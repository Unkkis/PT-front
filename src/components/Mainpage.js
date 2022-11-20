import React from 'react';
import training from '../images/lawrence-wilcox-MCP9atiDcAk-unsplash.jpg'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Mainpage() {


    return (
        <div style={{margin: 'auto', width: '50%'}}>
            <div style={{display: 'flex', width:'100%', padding:'20px'}}>
            <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/customers' key="customers" style={{ textDecoration: 'none', color:'blue' }}>Customers</Link>
            </Button>
            <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/trainings' key="trainings" style={{ textDecoration: 'none', color:'blue' }}>Trainings</Link>
            </Button>
            <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/calendar' key="calendar" style={{ textDecoration: 'none', color:'blue'  }}>Calendar</Link>
            </Button>
            <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/charts' key="charts" style={{ textDecoration: 'none', color:'blue'  }}>Charts</Link>
            </Button>
            </div>
            <div style={{display: 'flex', height: 400}}>
                <img style={{ height: '80%'}} src={training} alt="Training" />
            </div>
        </div>
    )
    

}