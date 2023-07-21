import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CalendarApp from './CalendarApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env);

root.render(
  <CalendarApp />
);
