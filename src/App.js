import './App.css';
import Articles from './Components/Articles';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Sekeleton Demo
      </header>
      <div className="app-container">
        <User/>
        <Articles/>
      </div>
    </div>
  );
}

export default App;
