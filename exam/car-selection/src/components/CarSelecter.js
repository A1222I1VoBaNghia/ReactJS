
import React,{useState} from "react";
const carList = ["Honda Civic", "Porches Panamera", "Mercedes S600"];
const colorList = ["Black","Red", "Grey", "White"];
function App() {
  const [selectedCar, setSelectedCar] = useState({selectedCar: {car: "", color: ""}});
  const handleChange = (prop, value) => {
    setSelectedCar((prve) => {
    return {
      ...prve,[prop]:value
    }
    });
    return (
      <>
      <h3>Select your Car</h3>
            <div>
                <span>Select a car</span>
                <select value={selectedCar.car} onChange={(e) => handleChange("car", e.target.value)}>
                    {carList.map((value, index) => {  
                        return <option key={index}>{value}</option>
                    })}
                </select>
            </div>
            <div>
                <span>Select a color</span>
                <select value={selectedCar.color} onChange={(e) => handleChange("color", e.target.value)}>
                    {colorList.map((value, index) => {
                        return <option key={index}>{value}</option>
                    })}
                </select>
            </div>
            <h3>You selected a {selectedCar.color} - {selectedCar.car}</h3></>
    )
  }
}
export default App;
