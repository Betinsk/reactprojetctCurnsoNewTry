import './App.css';
import React, { useState, useEffect, useMemo, useRef, useContext, createContext } from 'react';

const globalState = {
  title: 'o titulo que contexto',
  body: 'O body do contexto',
  counter: 0
}

const GlobalContext = createContext()


const Div = ({children}) => {
  return(
    <>
    <H1 />
    <P />
    </>
  )
}

const H1 = () => {
  const theContext = useContext(GlobalContext);
  const { contextState } = theContext
  return <h1>{contextState.title} {contextState.counter}</h1>
}

const P = () => {
  const theContext = useContext(GlobalContext);
  const { contextState: {body, counter},
          contextState, 
          setContextState
        } = theContext

  return <p onClick={() => setContextState({... contextState, counter: counter + 1})}>{body}</p>
}

function App() {

    const [contextState, setContextState] = useState(globalState)
  
  return (
     
      <GlobalContext.Provider value={{contextState, setContextState}}>
        <Div />
      </GlobalContext.Provider>
   
      );
}


export default App;
