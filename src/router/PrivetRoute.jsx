import React, { use, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/authcontext/AuthContext';


const PrivetRoute = ({children}) => {
    const { user, loading, setStateData } = use(AuthContext);
    const location = useLocation();
    useEffect(() => {
        setStateData(location.pathname)
    },[])

    if(loading){
        return <span className="loading loading-dots loading-xl mx-auto"/>
    }

    if (!user){
        return <Navigate to={"/signin"}/>
    }

    return children;
};

export default PrivetRoute;