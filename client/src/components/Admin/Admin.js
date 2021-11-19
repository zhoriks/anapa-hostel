import React, { useState } from 'react';
import s from './Admin.module.css';

const Admin = () => {
  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <form className={`container ${s.form}`}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange}/>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Пароль</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
  );
};

export default Admin;
