import React from 'react';
import {createRoot}from 'react-dom/client';
import App from './components/app';
import './css/bootstrap.min.css'
// import './css/fontawesome.css'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(<App/>)
