import './App.css';
import {  useContext,  } from 'react';
import React, { useState, useEffect, useMemo, useRef,  createContext } from 'react';

const globalState = {
  title: 'Ola',
  counter:0,
  body: "Ola meu povo"
}
const GlobalContext = React.createContext()

const Div = ({children}) => {
  
  return(
    <H1>Oi</H1>
  )
}

const H1 = ({}) => {
  const theContext = useContext(GlobalContext)
  const { contextState: {body, counter}, contextState, setContextState}  = theContext
  return(
    <>
    <h1 className='App'>{contextState.title} {counter}</h1>
    <p onClick={() => setContextState(s => ({...s, counter: s.counter + 1}))} className='App'>{contextState.body}</p>
    </>

  )
}

function App() {

  const [contextState, setContextState ] = useState(globalState)
  
  return (
      
      <GlobalContext.Provider value={{contextState, setContextState}}>
        <Div />
      </GlobalContext.Provider>
   
      );
}


export default App;
