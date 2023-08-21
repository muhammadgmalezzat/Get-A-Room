import Home from './Containers/Home';
import Rooms from './Containers/Rooms';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleRoom from './Containers/SingleRoom'; 
import Navbar from './Components/navbar'
import ErrorPage from './Containers/ErrorPage';
import './App.scss'

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/rooms/" element={<Rooms />} />
          <Route exact path="/rooms/:slug" element={<SingleRoom />} />
          <Route  element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
