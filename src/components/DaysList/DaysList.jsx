/* eslint-disable react/prop-types,eqeqeq,no-unused-vars,object-curly-newline,no-unused-expressions,max-len,no-nested-ternary */
import React from 'react'
import shortid from 'shortid'
import { Row } from 'antd'
import Day from '../Day/Day'
import 'antd/dist/antd.css'

const DaysList = ({ weather }) => {
  const optionsForParse = { year: 'numeric', month: 'numeric', day: 'numeric' }
  const options = { weekday: 'long', month: 'long', day: 'numeric' }
  const city = weather?.city?.name
  const dataArr = []

  function nextDateForCard(count = 0) {
    const dateForCard = new Date()
    return new Date(dateForCard.setDate(dateForCard.getDate() + count)).toLocaleDateString('ru-RU', options)
  }

  function nextDate(count = 0) {
    const dateForFilter = new Date()
    return new Date(dateForFilter.setDate(dateForFilter.getDate() + count)).toLocaleDateString('ru-RU', optionsForParse)
      .replace(/\./gm, '-')
      .split('-')
      .reverse()
      .join('-')
  }

  function parseWeather(dateForFilter, dateForCard) {
    const dayObj = {}

    const day = weather?.list?.filter((el) => el.dt_txt.includes(dateForFilter))
    const minTempArray = day?.map((el) => el.main.temp_min)
    const maxTempArray = day?.map((el) => el.main.temp_max)
    const minTemp = minTempArray ? Math.min(...minTempArray) > 0 ? `+${Math.round(Math.min(...minTempArray))}` : `${Math.round(Math.min(...minTempArray))}` : 'Загрузка...'
    const maxTemp = maxTempArray ? Math.max(...maxTempArray) > 0 ? `+${Math.round(Math.max(...maxTempArray))}` : `${Math.round(Math.max(...maxTempArray))}` : 'Загрузка...'
    const feelsLikeArray = day?.map((el) => el.main.feels_like)
    const feelsMin = feelsLikeArray ? Math.min(...feelsLikeArray) > 0 ? `+${Math.round(Math.min(...feelsLikeArray))}` : `${Math.round(Math.min(...feelsLikeArray))}` : 'Загрузка...'
    const feelsMax = feelsLikeArray ? Math.max(...feelsLikeArray) > 0 ? `+${Math.round(Math.max(...feelsLikeArray))}` : `${Math.round(Math.max(...feelsLikeArray))}` : 'Загрузка...'
    const humidityArray = day?.map((el) => el.main.humidity)
    const weatherImgsArrays = day?.map((el) => el.weather[0].icon)
      .join('')
      .replace(/[n,d]/g, ',')
      .slice(0, -1)
      .split(',')

    function mostFreqImg(arr) {
      const obj = {}
      let mostFreq = 0
      let which = []

      if (arr?.length <= 1) {
        arr?.forEach((el) => which.push(el))
      }

      arr?.forEach((el) => {
        if (!obj[el]) {
          obj[el] = 1
        } else {
          obj[el] += 1
        }

        if (obj[el] > mostFreq) {
          mostFreq = obj[el]
          which = [el]
        } else if (obj[el] === mostFreq) {
          which.push(el)
        }
      })

      return which
    }

    dayObj.date = dateForCard
    dayObj.img = mostFreqImg(weatherImgsArrays)
    dayObj.humidity = humidityArray
    dayObj.minFeel = feelsMin
    dayObj.maxFeel = feelsMax
    dayObj.min = minTemp
    dayObj.max = maxTemp
    dayObj.id = shortid.generate()
    dataArr.push(dayObj)

    return dataArr
  }

  const dataForProps = parseWeather(nextDate(), nextDateForCard())
  parseWeather(nextDate(1), nextDateForCard(1))
  parseWeather(nextDate(2), nextDateForCard(2))
  parseWeather(nextDate(3), nextDateForCard(3))
  parseWeather(nextDate(4), nextDateForCard(4))
  parseWeather(nextDate(5), nextDateForCard(5))

  // const dataForChart = weather?.list

  return (
    <>
      {/* { */}
      {/*  dataForProps */}
      {/*    ? <Chart dataForProps={dataForProps} /> */}
      {/*    : <p>Загрузка...</p> */}
      {/* } */}
      <Row justify="center" gutter={[16, 16]}>
        {
        dataForProps.length
          ? dataForProps.map((el) => (
            <Day
              key={el.id}
              city={city}
              date={el.date}
              min={el.min}
              max={el.max}
              minFeel={el.minFeel}
              maxFeel={el.maxFeel}
              humidity={el.humidity}
              img={el.img}
            />
          ))
          : <p>Загрузка...</p>
      }
      </Row>
    </>
  )
}

export default DaysList
