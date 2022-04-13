import {useState} from 'react'

function Counter(props){
    const [contador, setContador] = useState(props.initialValue)

    const manejarClick = () => {
      setContador(contador+1)
      console.log(contador)
    }
  
    return (
      <div className="App">
        <p>{contador}</p>
        <button onClick={manejarClick}>incrementar</button>
      </div>
    );
}

export default Counter