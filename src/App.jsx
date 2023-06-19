
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';


function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greeting = {'Bienvenidos a PECTU'} />
    </div>
  );
}

export default App;
