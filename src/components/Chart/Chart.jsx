/* eslint-disable react/jsx-props-no-spreading,no-return-assign,react/prop-types */
import React from 'react'
import { Line } from '@ant-design/charts'
// import './Chart.css'

const Chart = ({ dataForProps }) => {
  console.log('prop', dataForProps)
  const data = dataForProps ?? null

  const config = {
    data,
    width: 'auto',
    height: 300,
    autoFit: false,
    xField: 'date',
    yField: 'max',
    point: {
      size: 5,
      shape: 'diamond',
    },
  }

  // const config = {
  //   data,
  //   xField: 'date',
  //   yField: 'max',
  //   label: {},
  //   point: {
  //     size: 5,
  //     shape: 'diamond',
  //     style: {
  //       fill: 'white',
  //       stroke: '#5B8FF9',
  //       lineWidth: 2,
  //     },
  //   },
  //   tooltip: { showMarkers: false },
  //   state: {
  //     active: {
  //       style: {
  //         shadowColor: 'yellow',
  //         shadowBlur: 4,
  //         stroke: 'transparent',
  //         fill: 'red',
  //       },
  //     },
  //   },
  //   theme: {
  //     geometries: {
  //       point: {
  //         diamond: {
  //           active: {
  //             style: {
  //               shadowColor: '#FCEBB9',
  //               shadowBlur: 2,
  //               stroke: '#F6BD16',
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  //   interactions: [{ type: 'marker-active' }],
  // }

  return (
    <div className="chart-main">
      <Line {...config} />
    </div>
  )
}
export default Chart
