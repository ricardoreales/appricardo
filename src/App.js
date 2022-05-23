import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItenListContainer from './components/ItenListContainer/ItenListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <ItenListContainer saludo="Muchas gracias por visitarnos" colorText="white" size="5rem"/>
      <ItemCount/>
      </header>
    </div>
  );
}



export default App;


