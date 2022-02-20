import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ['City',   'Population', 'Area'],
  ['Tunis',      2761477,    1285.31],
  ['Ariana',     1324110,    181.76],
  
];

export const options = {
  region: 'TN', // Africa
  displayMode: 'markers',
  colorAxis: {colors: ['green', 'blue']}
 
};

export function Map() {
  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
