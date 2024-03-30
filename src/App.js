import './App.css';
import DashBoard from './Pages/Dashboard';
import Operator from './Pages/Operator';
import Login from './Pages/Login';
import LandOwners from './Pages/LandOwners';
import AddLandOwner from './Pages/LandOwners/AddLandOwner';
import OwnerProfile from './Pages/LandOwners/Profile';
import LandParcels from './Pages/LandParcels';
import ParcelProfile from './Pages/LandParcels/Profile';
import OperatorProfile from './Pages/Operator/Profile';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Events from './Pages/Events';
import AddOperator from './Pages/Operator/AddOperator';
import OperatorLandparcel from './Pages/Operator/landparcel';
import OperatorCrops from './Pages/Operator/crops';
import AddLandParcel from './Pages/LandParcels/AddLandParcel';
import EventDescription from './Pages/Events/EventDescription'
import AddEvent from './Pages/Events/AddEvent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          < Route path='/dashboard' element={<DashBoard />} />

          <Route path='/landowners' element={<LandOwners />} />
          <Route path='/landowners/add-landowner/:id' element={<AddLandOwner />} />
          <Route path='/landowners/:id' element={<OwnerProfile />} />

          <Route path='/landparcels' element={<LandParcels />} />
          <Route path='/landparcels/add-landparcel/:id' element={<AddLandParcel />} />
          <Route path='/landparcels/:id' element={<ParcelProfile />} />

          <Route path='/events' element={<Events />} />
          <Route path='/events/eventDescription/:id' element={<EventDescription />} />
          <Route path='/events/add-event/:id' element={<AddEvent />} />

          <Route path='/operator' element={<Operator />} />
          <Route path='/operator/add-operator' element={<AddOperator />} />
          <Route path='/operator/profile' element={<OperatorProfile />} />
          <Route path='/operator/profile/landparcel' element={<OperatorLandparcel />} />
          <Route path='/operator/profile/landparcel/crops' element={<OperatorCrops />} />



        </Routes>
      </Router>
    </div>
  );
}


export default App
