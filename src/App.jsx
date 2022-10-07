import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import axios from 'axios';
function App() {
const [data, setdata] = useState("")
    useEffect(() => {
    axios('https://api.weatherapi.com/v1/current.json?key=99dcc937cc0c4c0c80662236220110&q=Malaysia&aqi=no').then((e)=>{setdata(e.data)})
  }, [])

  return (
    data && 
    <div className="bg-slate-800 h-screen w-full flex items-center justify-center gap-4 gap-12 p-2 text-slate-50">
      <div className="inset-y-0 left-0 w-1/2 absolute flex-col flex">
        <div className="flex justify-center flex-col">
          <div className="text-5xl justify-center flex">Weather App</div>
          <div className="text-center text-4xl mt-10">{data.location.name}</div>
        </div>
      </div>
      
      <div className="justify-center bg-gray-700 w-1/2 h-screen p-3 flex absolute inset-y-0 right-0">
        <div>
          {" "}
          <div className=" justify-center items-center flex">
            <div className="relative justify-center items-center flex">
             <div className="mt-10 bg-white h-12 justify-center flex rounded-md "> 
             <button className="focus:bg-white focus:border-indigo-600 flex flex-rol items-center ">
              <div className=" rounded-md w-12 flex justify-center item-center"><Icon
                className=" w-6 h-6 my-auto text-gray-400 left-3"
                icon="ant-design:search-outlined"
              />
</div>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-12 w-96 text-gray-500 border rounded-md outline-none bg-gray-50 "
              /></button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
