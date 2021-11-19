import React, { useEffect } from 'react';
import './App.css';
// import { useHistory } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Bookings from '../Bookings/Bookings';
import Guest from '../Guest/Guest';
import Rooms from '../Rooms/Rooms';
import Settings from '../Settings/Settings';
import Admin from '../Admin/Admin';

import HomeView from '../HomeView/HomeView.jsx';
import Logout from '../Logout/Logout';
import actionTypesSession from '../../redux/actionTypes/sessionAT';
import bookingsAction from '../../redux/actionCreators/bookingsAC';

function App() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.login.session.admin);

  useEffect(() => {
    dispatch({ type: actionTypesSession.CHECK_SESSION_START });
    dispatch(bookingsAction.initBookingsStart());
  }, [dispatch]);

  return (
    <>
    {
    !admin
      ? <BrowserRouter>
    <Switch>
      <Route path='/' exact component={HomeView} />
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
      <Route path='/admin/logout' exact component={Logout} />
    </Switch>
    </BrowserRouter>
  }
    </>
  );
}

export default App;
