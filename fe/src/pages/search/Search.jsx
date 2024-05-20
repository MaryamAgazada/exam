
import React, { useState, Fragment } from "react";
import { useEffect } from "react";
import "./Search.scss"
function Search() {
    const [data, setData] = useState([]);
    const [inp,setInp]=useState("")
    async function getAllData() {
      const response = await fetch("http://localhost:3000");
      const movies = await response.json();
      setData(movies);
    }
    useEffect(() => {
    getAllData()
    },[]);
  return (
    <div>
        <input type="text" placeholder="filter" value={inp} onChange={(e)=>setInp(e.target.value)}/>
       <div className="cards">
            {data
            .filter((x)=>x.name.toLowerCase().includes(inp.toLowerCase()))
            .map((x) => {
              return (
                <>
                  <div className="card" key={x._id}>
                    <img src={x.img} alt="" />
                    <p>{x.name}</p>
                    <p>{x.price}</p>
                    <div><i className="fa-regular fa-heart"></i></div>
                    <div><i className="fa-solid fa-bag-shopping"></i></div>
                  </div>
                </>
              );
            })}
          </div>
    </div>
  )
}

export default Search
