import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Historial from './Formularios'
import Calidad from './Calidad'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calidad />} />
          <Route path="/formularios" element={<Historial />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
