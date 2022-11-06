import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Context';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='flex justify-center'>
        <button className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400">loading</button>
        </div>
        
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>

};

export default PrivateRoute;