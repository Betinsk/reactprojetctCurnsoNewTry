import { useRef, useEffect, useState } from 'react';
import './App.css';


const useMYHook = (cb) => {

  const savedCb = useRef()

    useEffect(() => {
      savedCb.current = cb
    }, [cb])


  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current()
    }, 2000)
    return () => clearInterval(interval)
  }, [cb])
  
}

function App() {
  const [counter, setCounter] = useState(0)


  useMYHook( () => setCounter(c => c + 1)
)

  return (
   
   <div>
    <h1>contador { counter}</h1>
   </div>
   
  )
}
export default App;
