import React, { useState } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Bookings from '../Bookings/Bookings';
import Guest from '../Guest/Guest';
import Rooms from '../Rooms/Rooms';
import Settings from '../Settings/Settings';
import Admin from '../Admin/Admin';

import HomeView from '../HomeView/HomeView.jsx';

function App() {
  const [isAdmin] = useState(false);
  return (
    <>
    {
    !isAdmin
      ? <BrowserRouter>
    <Switch>
      <Route path='/' exact component={HomeView} />
      <Route path='/admin' exact component={Admin} />
    </Switch>
    </BrowserRouter>
      : <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Bookings} />
      <Route path='/guest' exact component={Guest} />
      <Route path='/rooms' exact component={Rooms} />
      <Route path='/settings' exact component={Settings} />
    </Switch>
    </BrowserRouter>
  }
    </>
  );
}

export default App;
