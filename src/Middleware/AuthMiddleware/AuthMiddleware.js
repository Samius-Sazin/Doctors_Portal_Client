import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
import AuthMiddlewareLoading from '../../Pages/Shared/Loading/AuthMiddlewareLoading';

function AuthMiddleware() {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if( isLoading ) return <AuthMiddlewareLoading />

    return user?.email ? <Outlet /> : <Navigate to='/login' replace={true} state={{ from: location }} />
}

export default AuthMiddleware
