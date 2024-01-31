import './App.css';
import AddMovie from './components/AddMovie';
import FileUpload from './components/FileUpload';
import Login from './components/Login';
import Movies from './components/Movies';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <h1>Learn Firebase</h1>
      <Signup />
      <AddMovie />
      <FileUpload />
    </div>
  );
}

export default App;
