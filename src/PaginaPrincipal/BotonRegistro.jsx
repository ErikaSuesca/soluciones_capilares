import React, { useState } from 'react';
import ComponenteAPI from '../RegistroUsuarios/Registros';

function App() {
  const [showApiData, setShowApiData] = useState(false)
  const handleLoadApiData = () => {
    setShowApiData(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center pt-3">
      <a className="btn" href='/registros'>
      <button className="btn btn-outline-danger" onClick={handleLoadApiData}>Registros clientes</button>
      {showApiData && <ComponenteAPI />}
      </a>
    </div>
  );
}

export default App;
