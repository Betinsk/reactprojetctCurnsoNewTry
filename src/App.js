import { useRef, createContext, useContext, useReducer } from 'react';
import './App.css';
import P from 'prop-types'

//action,js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE'
}

//data.js
export const globalState = {
  title: 'o titulo que contexto',
  body: 'O body do contexto',
 count: 0
}

//reducer.js
export const reducer = (state, action) => {
  switch(action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar titulo')
      return {...state, title : action.payload}

    }
  }
  return {...state}
}

//App context
export const Context = createContext()

export const AppContext = ({children})  =>{
  const [state, dispatch] = useReducer(reducer, globalState)

    const changeTitle = (payload) => {
      dispatch({type: actions.CHANGE_TITLE, payload})
    }

  return (
  <Context.Provider value={{state, changeTitle}}>
    {children}
  </Context.Provider>
)}
  AppContext.propTypes = {
    children: P.node,
  }

  //H1 index.jsx
  export const H1 = () => {
    const context = useContext(Context)
    const inputRef = useRef()
    return  <>
    <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
      {context.state.title}
      </h1>
      <input type='text' ref={inputRef} />
      </>
  }

function App() {


  return (
    <AppContext>
   <div>
    <H1 />
   </div>
   </AppContext>
  )
}
export default App;
