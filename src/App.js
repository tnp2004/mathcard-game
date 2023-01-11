import logo from './logo.svg';
import './App.css';
import Gamedisplay from './Components/Gamedisplay';
import Cardpicker from './Components/Cardpicker';

function App() {
  return (
    <div className='container mx-auto text-center'>
      <h1 className='my-5 border rounded w-1/2 p-2 mx-auto'>Mathcardgame</h1>
      <Gamedisplay/>
      <Cardpicker/>
    </div>
  );
}

export default App;
