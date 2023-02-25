import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import UseAdmin from '../../hooks/UseAdmin';

import Navbar from '../../Pages/Shared/Navbar';

const DashboardLayout = () => {
  const {user}= useContext(AuthContext)
  const [isAdmin] = UseAdmin(user?.email)
  
  return (
        <div>
            <Navbar/>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet/>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-40 bg-base-100 text-base-content">
    
      <li><Link to="/dashboard">My Orders</Link></li>
      <li><Link to='/dashboard/myreview'>My Review</Link></li>
      <li><Link to='/dashboard/pay'>Pay</Link></li>
    {isAdmin && <>
      <li><Link to='/dashboard/users'>All Users</Link></li>
      <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
      <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
      <li><Link to='/dashboard/addProducts'>Add Products</Link></li>
    
    </>}
    
    
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;