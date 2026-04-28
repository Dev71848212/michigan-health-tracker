import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [healthData, setHealthData] = useState([]);
  const [selectedCounty, setSelectedCounty] = useState("All");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health-data")
      .then((response) => response.json())
      .then((data) => setHealthData(data));
  }, []);

  // get unique counties
  const counties = ["All", ...new Set(healthData.map((item) => item.county))];

  // filter data
  const filteredData =
    selectedCounty === "All"
      ? healthData
      : healthData.filter((item) => item.county === selectedCounty);

  return (
    <div className="container">
      <h1>Michigan Health Tracker</h1>

      <label>Select County: </label>
      <select onChange={(e) => setSelectedCounty(e.target.value)}>
        {counties.map((county, index) => (
          <option key={index}>{county}</option>
        ))}
      </select>

      <div className="cards">
        {filteredData.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.disease}</h2>
            <p>County: {item.county}</p>
            <p>Cases: {item.cases}</p>
            <p>Risk: {item.risk}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
