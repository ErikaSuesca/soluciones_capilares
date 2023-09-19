import React, { useEffect, useState } from 'react';

function ComponenteAPI ({ show }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (show) {
      // Realiza la solicitud a la API solo si show es true
      fetch('https://639c781616d1763ab14ae929.mockapi.io/test/front-end/lista')
        .then((response) => response.json())
        .then((data) => {
          // Al recibir los datos, actualiza el estado del componente
          setData(data);
        })
        .catch((error) => {
          console.error('Error al cargar los datos desde la API:', error);
        });
    }
  }, [show]);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ComponenteAPI;

