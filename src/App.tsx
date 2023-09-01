import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Heroes from './Heroes';
import HeroPage from './HeroPage';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
         <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/heroes' element={<Heroes/>}></Route>
            <Route path='/hero/:id' element={<HeroPage/>}></Route> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;