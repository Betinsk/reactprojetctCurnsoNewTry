import './App.css';
<<<<<<< HEAD
import React, { useState, useEffect, useMemo, useRef, useContext,  } from 'react';
=======
import React, { useState, useEffect, useMemo, useRef, useContext, createContext } from 'react';





>>>>>>> ddea69fa7c48f636863aaf5ef77f2f5abe823be7


<<<<<<< HEAD
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
=======

function App() {

    const [contextState, setContextState] = useState(globalState)
  
  return (
     
      <GlobalContext.Provider value={{contextState, setContextState}}>
>>>>>>> ddea69fa7c48f636863aaf5ef77f2f5abe823be7
        <Div />
      </GlobalContext.Provider>
   
      );
}


export default App;
