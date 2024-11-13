import P from 'prop-types'
import './App.css';
import React, { useState, useEffect, useMemo, useRef } from 'react';

const globalState = {
  title: 'o titulo que contexto',
  counter: 0
}

const Div = ({children}) => {
  return(
    <div className='App'>{children}</div>
  )
}

function App() {

    const GlobalContext = React.createContext()
  
  return (
      
      <div className='App'>
            <h1>Oi</h1>
       
      </div>
   
      );
}


export default App;
