import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Bookings from '../Bookings/Bookings';
import Guest from '../Guest/Guest';
import Rooms from '../Rooms/Rooms';
import Settings from '../Settings/Settings';
import Admin from '../Admin/Admin';

function App() {
  const isAdmin = useSelector((state) => state.login.isAdmin);
  return (
    <>
    {
    !isAdmin
      ? <BrowserRouter>
    <Switch>
      <Route path='/' exact>hello</Route>
      <Route path='/admin' exact component={Admin} />
    </Switch>
  </BrowserRouter>
      : <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/admin' exact component={Bookings} />
      <Route path='/admin/guest' exact component={Guest} />
      <Route path='/admin/rooms' exact component={Rooms} />
      <Route path='/admin/settings' exact component={Settings} />
    </Switch>
    </BrowserRouter>
  }
    </>
  );
}

export default App;
