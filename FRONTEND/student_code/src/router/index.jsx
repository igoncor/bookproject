import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login/Login"
import Root from "../layout/root"
import Home from "../pages/Home/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {path: "/home", element: <Home />},
            // {path: "/profile", element: <Profile />},
            {path: "/login", element: <Login />},
        ]
    },
  
    
])

export default router