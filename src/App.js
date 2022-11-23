import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiseaseType from './components/DiseaseType';
import Country from './components/Country';
import Disease from './components/Disease';
import Discover from './components/Discover';
import Users from './components/Users';
import PublicServant from './components/PublicServant';
import Doctors from './components/Doctors';
import Specialize from './components/Specialize';
import Record from './components/Record';


function App() {
  return (
      
      <Router>
        <Routes>
            <Route exact path='/' element={< Main />}></Route>
            <Route exact path='/diseaseType' element={< DiseaseType />}></Route>
            <Route exact path='/country' element={< Country />}></Route>
            <Route exact path='/disease' element={< Disease />}></Route>
            <Route exact path='/discover' element={< Discover />}></Route>
            <Route exact path='/users' element={< Users />}></Route>
            <Route exact path='/publicServant' element={< PublicServant/>}></Route>
            <Route exact path='/doctors' element={< Doctors />}></Route>
            <Route exact path='/specialize' element={< Specialize />}></Route>
            <Route exact path='/record' element={< Record />}></Route>
        </Routes>
      </Router>
    // </div>
  );
}

export default App;
