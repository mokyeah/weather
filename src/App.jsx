import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import moment from "moment";
function App() {
  const [data, setdata] = useState("");
  const [name, settype] = useState("Malaysia");
  const [after, setafter] = useState("");
  const [clock, setClock] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString({ hourCycle: "h12" }));
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString({ hourCycle: "h12" }));
    });
  }, []);

  useEffect(() => {
    const time = new Date();
    let hour = time.getHours();

    if (hour >= 0 && hour <= 12) {
      setTime("MORNING");
    } else if (hour >= 13 && hour <= 18) {
      setTime("AFTERNOON");
    } else {
      setTime("NIGHT");
    }
  });

  const [search, setSearch] = useState(
  );
  const [weather1, setWeather1] = useState(
    `https://api.weatherapi.com/v1/current.json?key=8a00824ae77d4575bb821930221510&q=Malaysia&aqi=no`
  );
  const [weather2, setWeather2] = useState(
    `https://api.weatherapi.com/v1/forecast.json?key=8a00824ae77d4575bb821930221510&q=Malaysia&days=5&aqi=no&alerts=no`
  );
  useEffect(() => {
    axios(weather1).then((e) => {
      setdata(e.data);
    });
  }, [weather1]);
  useEffect(() => {
    axios(weather2).then((e) => {
      setafter(e.data);
    });
  }, [weather2]);
  useEffect(() => {
    axios(
      `https://api.weatherapi.com/v1/current.json?key=8a00824ae77d4575bb821930221510&q=${name}&aqi=no`
    ).then((e) => {
      setdata(e.data);
    });
  }, [name]);
  useEffect(() => {
    axios(
      `https://api.weatherapi.com/v1/forecast.json?key=8a00824ae77d4575bb821930221510&q=${name}&days=5&aqi=no&alerts=no`
    ).then((e) => {
      setafter(e.data);
    });
  }, [name]);
  useEffect(() => {
    axios(
      `https://api.weatherapi.com/v1/search.json?key=8a00824ae77d4575bb821930221510&q=${name}`
    ).then((e) => {
      setSearch(e.data);
    });
  }, [name]);

  return (
    data &&
    after && (
      <div>
        <div className="bg-slate-800 h-[100vh] w-full flex flex-row items-center justify-center hidden-mobile p-2 text-slate-50 ">
          <div className=" w-1/2 flex-col flex hidden-mobile bg-slate-800 h-[100vh] overflow-y-auto ">
            <div className="flex justify-center flex-col">
              <div className="text-5xl justify-center flex p-2  ">
                Weather App
              </div>
              <div className="text-1xl p-2"></div>

              <div className="text-center text-4xl mt-16">
                {data.location.name}
              </div>
              <div className="text-1xl mt- text-center">
                {data.location.country}
              </div>
              <div className="mt-56">
                <div className="text-4xl mb-8 justify-center flex  ">
                  {data.current.condition.text}
                </div>
                <div className="mt-16 ">
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center mt-24">
                      <img
                        className="w-32 h-32 ml-10"
                        src={data.current.condition.icon}
                      ></img>
                      <div className=" text-6xl ">{data.current.temp_c}°C</div>
                      <div className="text-2xl -mt-8 ml-8 hidden-small">
                        Humidity: {data.current.humidity}% <div> Feels like:{data.current.feelslike_c}°C</div>

                      </div>
                     
                    </div>
                  </div>

                  <div className="h-1 w-full bg-white  mt-0.5"></div>
                  <div className="text-3xl mt-6 justify-center flex">
                    Weather Forecast
                  </div>
                  <div className="   mt-6 ml-12 text-2xl">
                    <div className="flex flex-rol gap-[112px]">
                      <div className="flex flex-col ">
                        <div>{after.forecast.forecastday[1].date}</div>
                        <div>
                          <img
                            src={
                              after.forecast.forecastday[1].day.condition.icon
                            }
                            className="h-16 w-16"
                          ></img>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <div>{after.forecast.forecastday[2].date}</div>
                        <div>
                          <img
                            src={
                              after.forecast.forecastday[2].day.condition.icon
                            }
                            className="h-16 w-16"
                          ></img>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <div>{after.forecast.forecastday[3].date}</div>
                        <div>
                          <img
                            src={
                              after.forecast.forecastday[3].day.condition.icon
                            }
                            className="h-16 w-16"
                          ></img>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <div>{after.forecast.forecastday[4].date}</div>
                        <div>
                          <img
                            src={
                              after.forecast.forecastday[4].day.condition.icon
                            }
                            className="h-16 w-16"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-600 justify-center w-1/2 h-[100vh] p-3 flex hidden-mobile">
            <div>
              <div>
                {" "}
                <div className=" justify-center items-center flex flex-col">
                  <div className="relative justify-center items-center flex">
                    <div className="mt-10 bg-gray-50 h-12 justify-center flex rounded-md ">
                      <button className="focus:bg-white focus:border-indigo-600 flex flex-rol items-center ">
                        <div className=" rounded-md bg-gray-50 w-12 flex justify-center item-center">
                          <Icon
                            className=" w-6 h-6 my-auto text-gray-400 left-3"
                            icon="ant-design:search-outlined"
                          />
                        </div>
                        <input
                          value={name}
                          onChange={(e) => {
                            settype(e.target.value);
                          }}
                          type="text"
                          placeholder="Search"
                          className="w-full h-12  text-gray-500 rounded-md outline-none bg-gray-50 "
                        />
                      </button>
                    </div>
                  </div>
                  <div className="text-5xl mt-36">
                    <div className="">GOOD {time}</div>
                    <div className="items-center justify-center flex">
                      MY FRIEND
                    </div>
                    <div className="justify-center flex mt-10 text-6xl">
                      {clock}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            
            <div className=" h-screen w-full flex items-center justify-center">
              <div className="text-5xl justify-center "></div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default App;
