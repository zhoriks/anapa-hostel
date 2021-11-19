import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import actionTypesLogout from '../../redux/actionTypes/logoutAT';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch({ type: actionTypesLogout.LOGOUT_START });
    history.push('/');
  }, [dispatch, history]);

  return (
    <div>
    </div>
  );
};

export default Logout;
