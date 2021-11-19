import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actionTypesLogin from '../../redux/actionTypes/loginAT';
import s from './Admin.module.css';

const Admin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const admin = {
      login,
      password,
    };
    dispatch({ type: actionTypesLogin.LOGIN_START, payload: admin });
  };
  return (
    <form className={`container ${s.form}`} onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={login} onChange={handleLoginChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
  );
};

export default Admin;
