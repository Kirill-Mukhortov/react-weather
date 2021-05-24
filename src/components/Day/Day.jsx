/* eslint-disable react/prop-types,object-curly-newline,arrow-body-style,no-nested-ternary,max-len */
import React from 'react'
import { Card, Col, Layout } from 'antd'
import './Day.css'
import 'antd/dist/antd.css'

const { Content, Sider } = Layout

const Day = ({ date, min, max, city, minFeel, maxFeel, humidity, img }) => {
  const currentHour = new Date().getHours()

  return (
    <div className="site-card-wrapper">
      <Col flex="auto">
        <Card
          title={[
            <Layout>
              <Sider>
                <div className="citi-weather-img">
                  {city}
                </div>
                <div className="card-title-date">{date}</div>
              </Sider>
              <Layout>
                <Content>
                  <div>
                    { img
                      ? currentHour > 7 && currentHour < 21
                        ? <img src={`http://openweathermap.org/img/wn/${img[0]}d@2x.png`} alt={img} />
                        : <img src={`http://openweathermap.org/img/wn/${img[0]}n@2x.png`} alt={img} />
                      : null}
                  </div>
                </Content>
              </Layout>
            </Layout>,
          ]}
          bordered={false}
          style={{ width: 270 }}
        >
          <p>
            <img className="day-weather-img" src={`${process.env.PUBLIC_URL}/icons/termometr.png`} alt="termometr" />
            День/Ночь:&nbsp;
            {max}
            &#8451;
            ...
            {min}
            &#8451;
          </p>
          <p>
            Ощущается как:&nbsp;
            {maxFeel}
            &#8451;
            ...
            {minFeel}
            &#8451;
          </p>
          <p>
            <img className="day-weather-img" src={`${process.env.PUBLIC_URL}/icons/humidity.png`} alt="humidity" />
            Влажность в течении дня:&nbsp;
            <p>
              {
            humidity
              ? `от ${Math.min(...humidity)}% до ${Math.max(...humidity)}%` : 'Загрузка...'
          }
            </p>
          </p>
        </Card>
      </Col>
    </div>
  )
}

export default Day
