import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import ClearButton from './ClearButton'
import Graph from './Graph'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Graph />
    </div>
    {/* <div>
      <ClearButton />
    </div> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
