
import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './Contexts/AuthContext/AuthProvider';
import Loading from './Pages/Shared/Loading';
import router from './Routes/Routes/router';

function App() {
 const {loading}= useContext(AuthContext)
 if(loading){
  return <Loading/>
 } 
 
 return (
    <div className='max-w-7xl mx-auto' >
     <RouterProvider router={router}/>
     <Toaster />
    </div>
  );
}

export default App;
