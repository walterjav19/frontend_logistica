import './App.css';
import './components/Tabla'
import TablaOrdenes from './components/Tabla';
import TablaEntrega from './components/TablaEntrega';

function App() {
  return (
    <div className="bg">
       <div className="mb-8"> {/* Margen inferior para la separación */}
                <TablaOrdenes />
            </div>
            <div>
                <TablaEntrega />
            </div>
    </div>
  );
}

export default App;
