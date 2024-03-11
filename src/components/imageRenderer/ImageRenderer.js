import React, { useState } from 'react'
import './image.css'
const ImageRenderer = ({data=[]}) => {
    const [currentPage,setCurrentPage]=useState(1)
    const [searchtext,setSearchText] =useState("")
    const itemsPerpage =5*currentPage

    const filteredData =data.filter((link)=>!link.endsWith("srt")&&link.toLowerCase().includes(searchtext.toLowerCase()))
    const handleIncrementPage =()=>{
        setCurrentPage(currentPage+1);
    } 
    const calculateTotalPages = (totalItems) => {
        let n = 1;
        let sum = 0;
        while (sum < totalItems) {
            sum += 5 + (n - 1) * 5;
            n++;
        }
        
        return n - 1; 
    };
    const totalPages = Math.ceil(calculateTotalPages(filteredData.length));  
    const handleDecrementPage =()=>{
        setCurrentPage(currentPage-1);
    } 
    const startIndex = (currentPage - 1) * itemsPerpage;
    const endIndex = Math.min(startIndex + itemsPerpage, filteredData.length);

  return (
    <div>
      <h1>Image Renderer</h1>
      <input type="text" value={searchtext} onChange={(e)=>setSearchText(e.target.value)}/>
      <table>
        <thead>
          <tr>
            <th>Image Link</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
         {filteredData.slice(startIndex, endIndex).map((item,index)=>{
            return (
              <tr key={index}>
                <td><a href={item} target="_blank" rel="noopener noreferrer">{item}</a></td>
                <td><img src={item} alt="NOT AVAILABLE"></img></td>
              </tr>
            )
         })}
        </tbody>
      </table>
   <div className='buttonContainer'>
      <button onClick={handleDecrementPage} disabled={currentPage === 1}>
        prev page
      </button>
        {`${currentPage} of ${totalPages} pages`}
      <button onClick={handleIncrementPage} disabled={currentPage === totalPages}>
        next page
      </button>
      </div>
    </div>
  )
}

export default ImageRenderer
