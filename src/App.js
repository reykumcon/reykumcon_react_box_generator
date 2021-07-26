import './App.css';
import { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [boxArray, setBoxArray] = useState([])

  return (
    <div className="App">
      <BoxForm boxArray={ boxArray } setBoxArray={ setBoxArray } />
      <BoxDisplay boxArray={ boxArray } />
    </div>
  );
}

export default App;
