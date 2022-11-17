import './App.css';
import Navigation from './components/Navigation'
import Customerlist from './components/Customerlist';
import {  BrowserRouter,  Routes,  Route } from"react-router-dom";
import Mainpage from './components/Mainpage';
import Trainingslist from './components/Trainingslist';
import Calendarpage from './components/Calendarpage';
import Chartspage from './components/Chartspage';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Grid container spacing={0}>
        <Grid item xs={1}>

        </Grid>
        <Grid item xs={11}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Mainpage />} />
            <Route path="/customers" element={<Customerlist />} />
            <Route path="/trainings" element={<Trainingslist />} />
            <Route path="/calendar" element={<Calendarpage />} />
            <Route path="/charts" element={<Chartspage />} />
          </Routes>
        </BrowserRouter>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
