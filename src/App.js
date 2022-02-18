import './App.css';
import Navbar from './layouts/navbar/Navbar';
import Home from './home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
