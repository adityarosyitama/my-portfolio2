import { useState,useEffect } from 'react'
import "./App.css";
import Splashscreen from './screen/Splashscreen';
import Home from './screen/Home';

function App() {
  const [cek, setCek] = useState(false);
  useEffect(() => {
    if (cek === false) {
      setTimeout(() => {
        setCek(true);

      }, 2000);
    } 
  }, [cek]);
  return (
    cek ? <Home/>:<Splashscreen/>
  );
}

export default App;


{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}