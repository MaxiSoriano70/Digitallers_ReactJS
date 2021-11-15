import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Crud from './componentes/Crud';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Listado de Estudiantes</h1>
      <Crud />
    </div>
  );
}

export default App;
