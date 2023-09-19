import React, { useState } from 'react';
import ComponenteAPI from '../API/ComponenteAPI';

function App() {
  const [showApiData, setShowApiData] = useState(false)
  const handleLoadApiData = () => {
    setShowApiData(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center pt-3">
      <button className="btn btn-outline-danger" onClick={handleLoadApiData}>Registros clientes</button>
      {showApiData && <ComponenteAPI />}
    </div>
  );
}

export default App;
