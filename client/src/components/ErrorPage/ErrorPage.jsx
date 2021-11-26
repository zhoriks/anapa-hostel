import React from 'react';
import { Link } from 'react-router-dom';
import error from './img/giphy.gif';
import s from './ErrorPage.module.css';

const ErrorPage = () => (
  <div className={s.container}>
    <div className={s.content}>
      <h1>404</h1>
      <img src={error} alt="" style={{ width: '700px', height: '400px' }} />
      <h2>Page not found</h2>
      <Link to='/' className={s.goBack}>Вернуться на главную</Link>
    </div>
  </div>
);

export default ErrorPage;
