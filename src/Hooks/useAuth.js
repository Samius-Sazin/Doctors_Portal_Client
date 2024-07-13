import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;