import { useState } from 'react'
import Register from './assets/components/Register'
import './App.css'

function App() {

  const [validate, setValidate] = useState(null)

  return (
    <>
      {/* Importación de registro (se envia estado de validación) */}
      <Register validate={validate} setValidate={setValidate}/>
    </>
  )
}

export default App
