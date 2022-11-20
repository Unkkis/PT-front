import React from 'react';
import training from '../images/lawrence-wilcox-MCP9atiDcAk-unsplash.jpg'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Mainpage() {


    return (
        <div>
            <p>Tämä on pääsivu</p>
            <div style={{display: 'flex'}}>
            <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/customers' style={{ textDecoration: 'none', color:'blue' }}>Customers</Link>
            </Button>
            <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/trainings' style={{ textDecoration: 'none', color:'blue' }}>Trainings</Link>
            </Button>
            <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/calendar' style={{ textDecoration: 'none', color:'blue'  }}>Calendar</Link>
            </Button>
            <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to='/charts' style={{ textDecoration: 'none', color:'blue'  }}>Charts</Link>
            </Button>
            </div>
            <div style={{display: 'flex', height: 400, width: '90%'}}>
                <img src={training} alt="Training" />
            </div>
        </div>
    )
    

}