import { GlobalContext } from "../contexts/AppContext";
import { useContext } from "react"; 

export const P = () => {
    const theContext = useContext(GlobalContext);
    const { contextState: {body, counter},
            contextState, 
            setState
          } = theContext
  
    return <p onClick={() => setState({... contextState, counter: counter + 1, title: 'Mudei o titulo'})}>{body}</p>
  }