import './App.css';
import React, { useState, useEffect, useMemo, useRef, useContext, createContext } from 'react';








function App() {

    const [contextState, setContextState] = useState(globalState)
  
  return (
     
      <GlobalContext.Provider value={{contextState, setContextState}}>
        <Div />
      </GlobalContext.Provider>
   
      );
}


export default App;
