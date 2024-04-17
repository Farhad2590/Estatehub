
import { Navigate, useLocation } from 'react-router-dom';
import useHooks from '../Hooks/useHooks';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useHooks()
    const location = useLocation()

    if (loader) {
        return <div className='text-center gap-2'>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-dots loading-lg"></span>
        </div>

    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;