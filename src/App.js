import logo from './logo.svg';
import { lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
// import ImageRenderer from './components/imageRenderer/ImageRenderer';
import Login from './components/login/Login';
const ImageRenderer =lazy(()=>import('./components/imageRenderer/ImageRenderer'))


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
    <Router>
      <Routes>
        <Route path="/getImages" exact element={<ImageRenderer data={data}/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
