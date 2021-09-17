import React from 'react';
import Sidenav from './sidenav';
import Main from './main';
import './styles/App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  return (
    <div className='app'>
      <Sidenav />
      <Main />
    </div>
  );
}

export default App;