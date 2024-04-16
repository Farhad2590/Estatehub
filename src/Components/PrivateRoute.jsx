
import { Navigate, useLocation } from 'react-router-dom';
import useHooks from '../Hooks/useHooks';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useHooks()
    const location = useLocation()
    // console.log(location);
    if (loader) {
        return <span className="loading loading-dots loading-lg"></span>
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