import React, {useState, useEffect} from 'react';
import {Routes,Route,Link, useNavigate} from 'react-router-dom';

import CustomAlert from './components/CustomAlert';
import CustomNavbar from './components/CustomNavbar';

import Dashboard from './pages/Dashboard';
import Friends from './pages/Friends';
import Events from './pages/Events';
import Expenses from './pages/Expenses';

const App = () => {
  const [alertstate,setAlertStete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlertStete(false);
    }, 1000)
  },[])

  return (

    <div>
      <CustomAlert variant='success' message='Welcome to Split Bill Application' show={alertstate} />
      <CustomNavbar />

      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/event" element={<Events />}/>
        <Route exact path="/friends" element={<Friends />}/>
        <Route exact path="/expense/:Id/:event" element={<Expenses/>} />
      </Routes>

    </div>
  );
}

export default App;
