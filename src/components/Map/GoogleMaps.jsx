/* eslint-disable object-curly-newline,no-unused-vars,arrow-body-style,react/prop-types */
import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import './GoogleMaps.css'

const GoogleMaps = ({ geoPosition }) => {
  console.log('MAP')
  const [cordinates, setCordinates] = useState([10, 10])

  useEffect(() => {
    setCordinates(geoPosition)
  }, [geoPosition])

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}` }}
        center={{ lat: cordinates.lat, lng: cordinates.lng }}
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
      />
    </div>
  )
}

export default GoogleMaps
