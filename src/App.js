import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Home from './Pages/Home/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Pages/RegisterLogin/Login/Login';
import Register from './Pages/RegisterLogin/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import AuthMiddleware from './Middleware/AuthMiddleware/AuthMiddleware';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <>
      <AuthProvider>
        <Router>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />

            <Route element={<AuthMiddleware />}>
              <Route path='appoinment' element={<Appoinment />} />
              <Route path='dashboard//*' element={<Dashboard />} />
            </Route>

            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path="*" element={< PageNotFound />} />
          </Routes>
          
        </Router >
      </AuthProvider >
    </>
  );
}

export default App;
