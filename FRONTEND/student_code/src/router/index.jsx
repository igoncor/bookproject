
import { createBrowserRouter } from "react-router-dom";
//import Login from "../pages/Login/Login";
import Profile from "../pages/Profile";


const router = createBrowserRouter ([
  {      
        path: '/perfil',
        element: <Profile />,
        //loader: () => {
          //  if (!localStorage.getItem("token")) {
              //return redirect("/signUp")  //si el usuario no está logeado redirige a login page
            //} else {
              //return null;
            //}
         // },
    },
])

export default router