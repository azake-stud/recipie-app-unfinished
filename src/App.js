import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Recipies from './components/Recipies';
import {Routes,Route} from 'react-router-dom'
import Recipe from './components/Recipe'
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <Form/>
      <Recipies/>
      <Routes>
        <Route path="/"/>
        <Route path="/Recipe/:recipe" element={<Recipe />}/>
      </Routes>
    </div>
  );
}

export default App;
