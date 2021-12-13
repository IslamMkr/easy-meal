import './App.css';
import {  
  Routes, 
  Route
} from 'react-router-dom'
import { Home } from './containers/Home/Home';
import { About } from './containers/About/About';
import { Contact } from './containers/Contact/Contact';
import { Categories } from './containers/Categories/Categories';
import { Recipes } from './containers/Recipes/Recipes';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='categories' element={<Categories />} />
          <Route path='recipes' element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
