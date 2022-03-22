import { useContext, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { AboutMe } from "../pages/AboutMe";
import { ContactMe } from "../pages/ContactMe";
import { Dashboard } from "../pages/Dashboard";
import { DetailedPost } from "../pages/DetailedPost";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { UserContext } from '../context/UserContext';
import { PrivateRoute } from "./PrivateRoute";


export const AppRouter = () => {
    
    const {Authenticated, checkToken, Loading} = useContext<any>(UserContext)

  useEffect(() => {

    checkToken()
    
  }, [checkToken, Authenticated])

    if(Loading){
        return (
            <h1>Cargando</h1>
        )
    }

    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>} ></Route>
                <Route path="/about" element={<AboutMe/>} ></Route>
                <Route path="/contact" element={<ContactMe/>} ></Route>
                <Route path="/detailedpost" element={<DetailedPost/>} ></Route>
                <Route path="/login" element={<Login/>} ></Route>
                {/* Protected routes, if auth is true then render children if else render home */}
                <Route path="/" element={<PrivateRoute Authenticated={Authenticated} />} >
                    <Route  path="/dashboard" element={<Dashboard/>} ></Route>
                </Route>
                <Route path="/*" element={<Navigate to="/home" replace />}/>
            </Routes>
        </BrowserRouter>
    )
}

