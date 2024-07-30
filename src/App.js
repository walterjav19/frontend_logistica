import './App.css';

import TablaOrdenes from './components/TablaOrdenes';
import TablaEntrega from './components/TablaEntrega';
import ModalEdit from './components/ModalEdit';
import React, { useState } from 'react';


function App() {

  const [entregas, setEntregas] = useState([]);

  const handleEntregarOrden = (orden) => {
      setEntregas([...entregas, orden]);
  };

  return (
    <div className="bg">
      <ModalEdit/>
       <div className="mb-8"> {/* Margen inferior para la separación */}
                <TablaOrdenes onEntregarOrden={handleEntregarOrden}/>
            </div>
            <div>
                <TablaEntrega entregas={entregas}/>
            </div>
    </div>
  );
}

export default App;
