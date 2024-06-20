
//import { createBrowserRouter } from "react-router-dom";
//import Login from "../pages/Login/Login";
//import Profile from "../pages/Profile";


//const router = createBrowserRouter ([
 // {      
        //path: '/perfil',
        //element: <Profile />,
        //loader: () => {
          //  if (!localStorage.getItem("token")) {
              //return redirect("/signUp")  //si el usuario no está logeado redirige a login page
            //} else {
              //return null;
            //}
         // },
   // },
//])

import { createBrowserRouter } from "react-router-dom"

import Root from "../layout/root"
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {path: "/home", element: <Home />},
            {path: "/profile", element: <Profile />},
            // {path: "/login", element: <Login />},
        ]
    },
  
    
])

export default router