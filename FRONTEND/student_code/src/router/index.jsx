import { createBrowserRouter } from "react-router-dom"
import LoginPages from "../pages/Login/Login"
import Root from "../layout/root"
import Home from "../pages/Home/Home"
import SignUp from "../pages/Singup/Registro"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {path: "/home", element: <Home />},
            // {path: "/profile", element: <Profile />},
            {path: "/signup", element: <SignUp />},
            {path: "/login", element: <LoginPages />},
        ]
    },
  
    
])

export default router