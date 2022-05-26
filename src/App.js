import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <ItemListContainer saludo="Muchas gracias por visitarnos" colorText="white" size="5rem"/>
      <ItemCount stock={10}/>
      </header>
    </div>
  );
}



export default App;


