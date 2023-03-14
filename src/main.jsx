import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {TaskContextProvider} from './context/TaskContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  // es como un recomendador para corregir
  <React.StrictMode>  
    <TaskContextProvider>
    <App />
    </TaskContextProvider>
  </React.StrictMode>
)

