import './App.css';
import React, { useContext } from 'react'
import cities from './contexts/cities';
import WeatherContext from './contexts/WeatherContext'
import { wiIcons } from './helpers/icons'

function App() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const {
    city,
    setCity,
    weatherResponse
  } = useContext(WeatherContext)
  const { current, daily } = weatherResponse
  return (
    <section className="vh-100" style={{ backgroundColor: '#C1CFEA' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100" style={{ color: '#282828' }}>
          <div className="col-md-9 col-lg-7 col-xl-5">
            <div className='card mb-4'>
              <form onChange={e => setCity(JSON.parse(e.target.value))}>
                <select className='w-100 border-0'>
                  {cities.map((city, index) => (
                    <option key={index} value={JSON.stringify(city)}>{city.name}</option>
                  ))}
                </select>
              </form>

            </div>
            <div className="card mb-4 gradient-custom" style={{ borderRadius: '25px' }}>
              <div className="card-body p-4">
                <div id="demo1" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-between mb-4 pb-2">
                        <div className='flex-fill'>
                          <h2 className="display-2"><strong>{Math.round(current?.temp - 273)} °C</strong></h2>
                          <p className="text-muted mb-0">{city.name}</p>
                          <div className='d-flex justify-content-between mt-1'>
                            <p className="text-muted mb-0">Clouds:  {current?.clouds}</p>
                            <p className="text-muted mb-0">Feels Like:  {Math.round(current?.feels_like - 273)}</p>
                            <p className="text-muted mb-0">Humidity:  {current?.humidity}</p>
                          </div>
                        </div>
                        <div>
                          <i className={`display-2 wi ${wiIcons[current?.weather[0].icon]}`}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ borderRadius: '25px' }}>
              <div className="card-body p-4">
                <div id="demo3" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                        {daily?.map((day, index) => (
                          <div className="flex-column" key={index}>
                            <p className="small"><strong>{Math.round(day.temp.day - 273)}°C</strong></p>
                            <i className={`fs-1 wi ${wiIcons[day.weather[0].icon]}`} style={{ color: '#ddd' }} />
                            <p className="mb-0 mt-3"><strong>{days[new Date(day.dt * 1000).getDay()]}</strong></p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='mt-4'>
              <div className='card-body d-flex flex-column align-items-center'>
                <span className='text-muted'>Weather App</span>
                <span className='text-muted'>Designed by Ömer Genç</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
