import './App.css';
import Navigation from './components/Navigation'
import Customerlist from './components/Customerlist';
import {  BrowserRouter,  Routes,  Route } from"react-router-dom";
import Trainingslist from './components/Trainingslist';
import Calendarpage from './components/Calendarpage';
import Chartspage from './components/Chartspage';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <div className="App" >
      <BrowserRouter >
        <Navigation />
        <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',}}>


            <Routes>
              <Route exact path="/" element={<Mainpage />} />
              <Route path="/customers" element={<Customerlist />} />
              <Route path="/trainings" element={<Trainingslist />} />
              <Route path="/calendar" element={<Calendarpage />} />
              <Route path="/charts" element={<Chartspage />} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
