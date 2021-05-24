/* eslint-disable no-unused-vars,object-curly-newline */
import React, { useEffect, useState } from 'react'
import { Alert } from 'antd'
import DaysList from './components/DaysList/DaysList'
import FormHeader from './components/FormHeader/FormHeader'
import GoogleMaps from './components/Map/GoogleMaps'
import Chart from './components/Chart/Chart'
import './App.css'
import 'antd/dist/antd.css'

function App() {
  const [weather, setWeather] = useState({})
  const [input, setInput] = useState('')
  const [geoPosition, setGeoPosition] = useState({ lat: null, lng: null })
  const [geoStatus, setGeoStatus] = useState(false)
  const [weatherStatus, setWeatherStatus] = useState(false)
  console.log('===>>>>', weather)

  console.log('APP', weather.list)
  const getUserCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeoPosition((prev) => ({
          ...prev,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }))
        setGeoStatus(true)
      })
    }
  }

  const getWeather = async (city) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/forecast?q=${city}&units=metric&lang=ru&appid=${process.env.REACT_APP_API_KEY}`)
    const currentWeather = await response.json()
    setGeoPosition((prev) => ({
      ...prev,
      lat: currentWeather.city.coord.lat,
      lng: currentWeather.city.coord.lon,
    }))
    setWeather(currentWeather)
  }

  const getWeatherCoordinates = async (latitude, longitude) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=ru&appid=${process.env.REACT_APP_API_KEY}`)
    const currentWeather = await response.json()
    setWeather(currentWeather)
  }

  useEffect(() => {
    getUserCoordinates()
  }, [])

  useEffect(() => {
    getWeatherCoordinates(geoPosition.lat, geoPosition.lng)
  }, [geoStatus])

  const submitHandler = () => {
    getWeather(input.trim())
    setWeatherStatus(true)
    setInput('')
  }

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const onClose = (e) => {}

  return (
    <>
      <FormHeader submitHandler={submitHandler} inputHandler={inputHandler} input={input} />
      {/* <GoogleMaps geoPosition={geoPosition} /> */}
      {/* <Chart weather={weather} /> */}
      {
        geoStatus || weatherStatus
          ? (
            <div className="site-layout-content">
              <DaysList weather={weather} />
            </div>
          )
          : (
            <div className="error-content">
              <Alert
                message="Ошибка определения геопозиции"
                description="Вы не разрешили определение геопозиции в Вашем браузере. Воспользуйтесь ручным поиском погоды."
                type="error"
                closable
                onClose={onClose}
              />
            </div>
          )
      }
    </>
  )
}

export default App
