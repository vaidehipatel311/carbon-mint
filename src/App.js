import './App.css';
import DashBoard from './Pages/Dashboard';
import Operator from './Pages/Operator';
import Login from './Pages/Login';
import LandOwners from './Pages/LandOwners';
import LandParcels from './Pages/LandParcels';
import Profile from './Pages/Operator/Profile';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Events from './Pages/Events';
import AddOperator from './Pages/Operator/AddOperator';
import OperatorLandparcel from './Pages/Operator/landparcel';
import OperatorCrops from './Pages/Operator/crops';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/operator' element={<Operator />} />
          <Route path='/landowners' element={<LandOwners />} />
          <Route path='/landparcels' element={<LandParcels />} />
          <Route path='/events/:id' element={<Events />} />
          <Route path='/operator/profile' element={<Profile />} />
          <Route path='/operator/profile/landparcel' element={<OperatorLandparcel />} />
          <Route path='/operator/profile/landparcel/crops' element={<OperatorCrops />} />
          <Route path='/operator/add-operator' element={<AddOperator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
