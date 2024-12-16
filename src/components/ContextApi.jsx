import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const ApiData = createContext();

const ContextApi = ({ children }) => {
  let [info, setInfo] = useState([])
  let [loading,setLoading ] =useState(true)
  let getData = ()=>{
    axios.get('https://dummyjson.com/products').then((response)=>{
      setInfo(response.data.products)
      setTimeout(() => {
        setLoading(false)
      },2000)
    })
  }
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <ApiData.Provider value= {{info,loading}}>
      {children}
    </ApiData.Provider>
  );
};


export default ContextApi;
