import React from 'react';
const option = {
    series: [
    
{
  name: 'Evaporation',
  type: 'bar',
  data: [1.0, 4.0, 8.0, 26.0, 26.0, 75.0, 140.0]
},
{
  name: 'Precipitation',
  type: 'bar',
  data: [1.5, 4.5, 10.0, 28.0, 28.5, 70.0, 160.0]
},
{
  name: 'Temperature',
  type: 'line',
  yAxisIndex: 1,
  data: [1.5, 1.7, 2.5, 4.0, 6.0, 10.5, 20, 23]
},
],
legend: {
data: ['Evaporation', 'Precipitation', 'Temperature']
},
xAxis: [
{
  type: 'category',
  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
}
],
yAxis: [
{
  type: 'value',
  name: 'Precipitation',
  min: 0,
  max: 250,
  interval: 50,
  axisLabel: {
    formatter: '{value} ml'
  }
},
{
  type: 'value',
  name: 'Temperature',
  min: 0,
  max: 25,
  interval: 5,
  axisLabel: {
    formatter: '{value} °C'
  }
}
],

};
export default option;