import './App.scss';
import Header from './Header';
import { Landing } from './Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Landing />
      <footer>
        Lavleen Bhachu. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
