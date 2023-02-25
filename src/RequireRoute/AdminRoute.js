import React, { useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import UseAdmin from '../hooks/UseAdmin';
import Loading from '../Pages/Shared/Loading';

const AdminRoute = ({children}) => {
   const {user,loading}= useContext(AuthContext)
   const [isAdmin,adminLoading]= UseAdmin(user?.email)
  
const location = useLocation()
if(loading || adminLoading){
   return <Loading/>
}
   if(user && isAdmin){
    return children;
   }
    return <Navigate to="/login" state={{from:location}} replace/>
};

export default AdminRoute;