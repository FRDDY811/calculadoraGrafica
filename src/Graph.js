import React from "react"
import './App.css'
// import CanvasDraw from "react-canvas-draw"
import { Bar } from 'react-chartjs-2'

function Graph() {
  const data = {
    labels: [],
    datasets: [{
      label: 'Grafica',
      backgroundColor: 'red',
      borderColor: 'black',
      borderWidth: 1,
      data: [{
        x: 0,
        y: 0
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
            x:
              <input type="inputX" name="inputX" size="5" value={10} />
            y:
              <input type="inputY" name="inputY"  size="5" value={10}/>
          </label>
         <input type="submit" value="Calcular Grafica" />
      </form>
      </div>
    </div>
  )
}

export default Graph
