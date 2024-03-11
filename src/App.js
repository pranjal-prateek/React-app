import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ImageRenderer from './components/imageRenderer/ImageRenderer';
import Login from './components/login/Login';

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetching =async()=>{
      const data = await fetch('/api/getImages',);
      const jsonData =await data.json();
      setData(jsonData)
      console.log(jsonData)
    }
    fetching()
  },[])
  return (
    <div className="App">
      <Login/>
      {/* <ImageRenderer data={data}/> */}
    </div>
  );
}

export default App;
