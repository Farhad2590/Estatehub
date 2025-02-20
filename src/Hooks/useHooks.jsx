import { useContext } from "react";
import { AuthContext } from "../FirbaseProvider/FirebaseProvider";


const useHooks = () => {
    const all = useContext(AuthContext)
    return all;
};

export default useHooks;