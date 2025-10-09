import logo from './logo.svg';
import './App.css';
import Search from './components/Search.js';
import { useState } from 'react';
import { Chart } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement, PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


function App() {
  const [count, setCount] = useState(0);
  const [ageDate, setAgeData] = useState('');
  const handleInputData = (e) => {
    setAgeData(e.target.value)
  }
  const handleCalculateAge = (e) => {
    let currentDate = new Date();
    let dob = new Date(ageDate);
    if (currentDate - dob < 0 || !ageDate) {
      return;
    }
    console.log(dob, currentDate)
    let days = (currentDate - dob) % (60*60*24);
    let months = days%30;
    let years = months%12;
    console.log(days, months, years)

    if((currentDate - dob) > (3600*24)){

    }
    console.log(currentDate - dob, "naven")
  }
  return (
    <div className="App">
      <Search/>
      <button onClick={()=>setCount((prev)=>prev+1)}>increment</button>
      <div>learn react</div>
      <div>naveen</div>
      <h1>{count}</h1>
      <input id="birthdate" type="date"  onChange={(e) => handleInputData(e)} />
      <button  onClick={() => handleCalculateAge()}>Calculate Age</button>
      <div style={{width : "500px", height:"500px"}}>
        Chart1
        <Line
          data={{
            labels:["A","B","C"],
            datasets : [
              {
                label : "Revenue",
                data : [100,400,250],
              },
              {
                label : "Revenue",
                data : [200,300,190],
              }
            ]
          }}
        ></Line>
      </div>
    </div>
  );
}

export default App;
