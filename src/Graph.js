import React from "react"
import './App.css'
import { Bar } from 'react-chartjs-2'

function Graph() {
  const data = {
    labels: [1,2,3,4,5],
    datasets: [{
      label: 'Graficas',
      backgroundColor: 'red',
      borderColor: 'black',
      borderWidth: 1,
      data: [{
        x: 1,
        y: 3
      },
      {
        x: 2,
        y: 0.5
      },
      {
        x: 3,
        y: 2.4
      },
      {
        x: 4,
        y: 1.3
      },
      {
        x: 5,
        y: 4.4
      }]
    }]
  }

  const options = {
    maintainAspectRatio: false,
    responsive: true
  }

  return (
    <div className="Graph-App">
      <h2 className="header">Calculadora Grafica</h2>
      <Bar data={data} options={options} />
      <div className="Graph-inputs">
      <form>
          <label>
            <input type="input" placeholder="x" className="inputX" size="5"/>
            <input type="input"  placeholder="y" className="inputY"  size="5"/>
          </label>
         <input type="submit" value="Calcular Grafica" />
      </form>
      </div>
    </div>
  )
}

export default Graph
