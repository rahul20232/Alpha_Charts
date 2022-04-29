import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactECharts from 'echarts-for-react'; 
import data from "./data";

function App() {
  
  return (
    
<ReactECharts
  option={data}
  style={{ height: '600px' }}
/>
    
    
  );
}

export default App;
