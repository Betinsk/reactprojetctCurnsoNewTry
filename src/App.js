import P from 'prop-types'
import './App.css';
import React, { useState, useEffect, useMemo, useRef, useContext,  } from 'react';

const globalState = {
  title: 'o titulo que contexto',
  counter: 0
}

const GlobalContext = React.createContext()

const Div = ({children}) => {
  return(
    <H1>Oi</H1>
  )
}

const H1 = ({}) => {
  const theContext = useContext(GlobalContext)
  console.log(theContext)
  return(
    <h1 className='App'>{theContext.title}</h1>
  )
}

function App() {

  return (
      <GlobalContext.Provider value={globalState}>
        <Div />
      </GlobalContext.Provider>
   
      );
}


export default App;
