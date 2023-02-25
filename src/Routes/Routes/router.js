import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddProducts from '../../AdminSection/ManageAllOrders/AddProducts';
import ManageAllOrders from '../../AdminSection/ManageAllOrders/ManageAllOrders';
import ManageProdects from '../../AdminSection/ManageAllOrders/ManageProdects';

import MyOrders from '../../Dashboard/MyOrders/MyOrders';
import MyReview from '../../Dashboard/MyReview/MyReview';
import Pay from '../../Dashboard/Pay/Pay';

import DashboardLayout from '../../LayOut/DashboardLayout/DashboardLayout';
import Main from '../../LayOut/Main/Main';
import AllUsers from '../../Pages/AllUsers/AllUsers';


import Explores from '../../Pages/Explores/Explores/Explores';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Purches from '../../Pages/Purches/Purches';
import SignUp from '../../Pages/Shared/SignUp/SignUp';
import AdminRoute from '../../RequireRoute/AdminRoute'

import PrivateRoute from '../../RequireRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/explores",
                element:<Explores/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            },
            {
                path:"/products/:id",
                element:<PrivateRoute>
                    <Purches/>
                </PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyOrders/>
            },
            {
                path:'/dashboard/myreview',
                element:<MyReview/>
            },
            {
                path:'/dashboard/pay',
                element:<Pay/>
            },
            {
                path:'/dashboard/users',
                element:<AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path:'/dashboard/manageAllOrders',
                element:<AdminRoute><ManageAllOrders/></AdminRoute>
            },
            {
                path:'/dashboard/manageProducts',
                element:<AdminRoute><ManageProdects/></AdminRoute>
            },
            {
                path:'/dashboard/addProducts',
                element:<AdminRoute><AddProducts/></AdminRoute>
            },
           
        ]
    }
])

export default router;