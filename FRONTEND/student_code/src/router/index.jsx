import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/Login/Login"
import Root from "../layout/root"
import Home from "../pages/Home/Home"
import SignUpPage from "../pages/Singup/SignUpPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {path: "/home", element: <Home />},
            // {path: "/profile", element: <Profile />},
            {path: "/signup", element: <SignUpPage />},
            {path: "/login", element: <LoginPage />},
        ]
    },    
])

export default router