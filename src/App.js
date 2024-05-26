import './App.css';

import Counter from "./components/Counter";
import {useState} from "react";

function App() {
    const [isReset, setIsReset] = useState(false)

    const handleButton = () => {
        setIsReset(true)
    }


  return (

    <div className="App">
        <Counter resetCounter={isReset} teamName='Kakachikner'/>
        <Counter resetCounter={isReset} teamName='Vardikner'/>
        <button onClick={handleButton}>Reset All</button>
    </div>
  );
}
export default App;
