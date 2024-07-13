import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
import AuthMiddlewareLoading from '../../Pages/Shared/Loading/AuthMiddlewareLoading';

function AuthMiddlewareDashboard() {
    const { isAdmin, dashboardLoading } = useAuth();

    if (dashboardLoading) return <AuthMiddlewareLoading />

    return isAdmin ? <Outlet /> : <Navigate to='/dashboard' />
}

export default AuthMiddlewareDashboard
