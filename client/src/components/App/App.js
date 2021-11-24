import React, { useEffect } from 'react';
import './App.css';
// import { useHistory } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Bookings from '../Bookings/Bookings';
import Guest from '../Guest/Guest.jsx';
import Rooms from '../Rooms/Rooms';
import Admin from '../Admin/Admin';

import HomeView from '../HomeView/HomeView.jsx';
import Logout from '../Logout/Logout';
import actionTypesSession from '../../redux/actionTypes/sessionAT';
import bookingsAction from '../../redux/actionCreators/bookingsAC';
import roomAction from '../../redux/actionCreators/roomAC';
import SelectRoom from '../SelectRoom/SelectRoom.jsx';
import guestAction from '../../redux/actionCreators/guestAC';

import actionTypesBookingForm from '../../redux/actionTypes/bookingFormAT';
import reviewsTickerAction from '../../redux/actionCreators/reviewsTickerAC';
import AdminCreateBookingForm from '../AdminCreateBookingForm/AdminCreateBookingForm.jsx';
import BookingFormGuestData from '../BookingFormGuestData/BookingFormGuestData.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import adminReviewsAction from '../../redux/actionCreators/adminReviewsAC';
import Cleaning from '../Cleaning/Cleaning';

function App() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.login.session.admin);

  useEffect(() => {
    dispatch({ type: actionTypesSession.CHECK_SESSION_START });
    dispatch(bookingsAction.initBookingsStart());
    dispatch(guestAction.initGuestsStart());
    dispatch(roomAction.initRoomStart());
    dispatch(adminReviewsAction.initAdminReviewsStart());
    dispatch({ type: actionTypesBookingForm.SEND_DATES_IN_DB_START });
    dispatch(reviewsTickerAction.getReviewsFromDB());
  }, [dispatch]);

  return (
    <>
    {
    !admin
      ? <BrowserRouter>
    <Switch>
      <Route path='/' exact component={HomeView} />
      <Route path='/admin' exact component={Admin} />
      <Route path='/select-room' exact component={SelectRoom} />
      <Route path='/final-booking' exact component={BookingFormGuestData} />
    </Switch>
    </BrowserRouter>
      : <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/admin' exact component={Bookings} />
      <Route path='/admin/guest' exact component={Guest} />
      <Route path='/admin/rooms' exact component={Rooms} />
      <Route path='/admin/logout' exact component={Logout} />
      <Route path='/admin/create-booking' exact component={AdminCreateBookingForm} />
      <Route path='/admin/reviews' exact component={Reviews} />
      <Route path='/admin/cleaning' exact component={Cleaning} />
    </Switch>
    </BrowserRouter>
  }
    </>
  );
}

export default App;
