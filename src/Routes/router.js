import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../Components/Body/FAQs';
import Blog from '../Components/Body/Blog';
import CourseDetails from '../Components/Body/CourseDetails';
import Courses from '../Components/Body/Courses';
import Home from '../Components/Home/Home';
import Login from '../Components/Registration/Login';
import Signup from '../Components/Registration/Signup';
import ErrorPage from '../Error/ErrorPage';
import Root from '../Root/Root';
import PrivateRoute from './PrivateRoute';
import FAQs from '../Components/Body/FAQs';
import PasswordReset from '../Components/Registration/PasswordReset';
import CheckoutPage from '../Components/SharedData/CheckoutPage';
import Blog2 from '../Components/Body/Blog2';
import CORS from '../Components/SharedData/CORS';
import Firebase from '../Components/SharedData/Firebase';
import UpdateProduct from '../Components/Registration/UpdateProduct';

export const router = createBrowserRouter([
    {
        path: '/', 
        loader:()=>{
            return fetch('https://b610-lerning-platform-server-side-phmahbub-phmahbub.vercel.app/courses')
        } ,
        element: <Root/>,
        errorElement:<ErrorPage/>,
        children: [
            {path:'/home', element:<Home/>},
            {path:'/', element:<Home/>},
            {path:'/courses',element:<Courses/>},
            {path:'/faqs', element:<FAQs/>},
            {path:'/blog', element:<Blog/>},
            {path:'/blog2', element:<Blog2/>},
            {path:'/blog2/cors', element:<CORS/>},
            {path:'/blog2/firebase', element:<Firebase/>},
            {path:'/login', element:<Login/>},
            {path:'/signup', element:<Signup/>},
            {path:'/resetpassword', element:<PasswordReset/>},
            {path:'/update/:id', element:<UpdateProduct/>},
            {path:'/courses/:id', 
            loader: ({params})=>
                {
                    return fetch(`https://b610-lerning-platform-server-side-phmahbub-phmahbub.vercel.app/courses/${params.id}`)
                },
            element:<CourseDetails/>},
            {path:'/courses/checkout/:uid', 
            loader: ({params})=>
                {
                    return fetch(`https://b610-lerning-platform-server-side-phmahbub-phmahbub.vercel.app/courses/checkout/${params.uid}`)
                },
            element:<PrivateRoute><CheckoutPage/></PrivateRoute>},


            
        ]
    }
])
    



  

