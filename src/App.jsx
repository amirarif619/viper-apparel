import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';  
import AuthPage from './pages/AuthPage'; 
import SuccessPage from './pages/SuccessPage';
//import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/success" element={<SuccessPage/>} />
      <Route path="/" element={<HomePage />}/>

      </Routes>


    </Router>
  )
}

export default App
