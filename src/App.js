
import { lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
// import ImageRenderer from './components/imageRenderer/ImageRenderer';
import Login from './components/login/Login';
import Navbar from './NavBar/Navbar';
const ImageRenderer =lazy(()=>import('./components/imageRenderer/ImageRenderer'))


function App() {
  const [loaded,setLoaded] =useState(false)
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetching =async()=>{

      try{
        const data = await fetch('/api/getImages',);
      const jsonData =await data.json();
      setData(jsonData)
      setLoaded(true)
      console.log(jsonData)
      }
      catch(error){
        console.log(error)
      }
      
    }
    fetching()
  },[])
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/getImages" exact element={<ImageRenderer data={data} loaded={loaded}/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
