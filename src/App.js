import './App.css';
import Navigation from './components/Navigation'
import Customerlist from './components/Customerlist';
import {  BrowserRouter,  Routes,  Route } from"react-router-dom";
import Mainpage from './components/Mainpage';
import Trainingslist from './components/Trainingslist';
import Calendarpage from './components/Calendarpage';
import Chartspage from './components/Chartspage';

function App() {
  return (
    <div className="App" >
      <Navigation />
      <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',}}>

        <BrowserRouter >
          <Routes>
            <Route exact path="/PT-front" element={<Customerlist />} />
            <Route path="/PT-front/customers" element={<Customerlist />} />
            <Route path="/PT-front/trainings" element={<Trainingslist />} />
            <Route path="/PT-front/calendar" element={<Calendarpage />} />
            <Route path="/PT-front/charts" element={<Chartspage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
