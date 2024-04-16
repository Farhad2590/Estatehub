
import { Navigate,useLocation } from 'react-router-dom';
import useHooks from '../Hooks/useHooks';

const PrivateRoute = ({children}) => {
    const {user,loader} = useHooks()
    const location = useLocation()
    // console.log(location);
    if(loader){
        return <div className='text-center'>
            <span className="loading loading-infinity loading-lg"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}/>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;