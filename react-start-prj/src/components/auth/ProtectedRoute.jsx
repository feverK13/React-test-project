import {Maps} from 'react-router-dom';
import { useAuth } from '../../context/AuthContex';
import { Children } from 'react';

export const ProtectedRoute = ({children}) => {
    const {isLoggedIn} = useAuth()
    if(!isLoggedIn){
        return <Navigate to='/auth' replace />
    }

    return children
}