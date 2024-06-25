import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/root"
import Home from "../pages/Home/Home"
import SignUpPage from "../pages/SignUp/SignUp"
import SignInPage from "../pages/SignIn/SignIn"
import Profile from "../pages/Profile/Profile"
import Favorite from "../pages/Favorite/Favorite"
import Pending from "../pages/Pending/Pending"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {path: "/home", element: <Home />},
            {path: "/sign-up", element: <SignUpPage />},
            {path: "/sign-in", element: <SignInPage />},
            {path: "/profile", element: <Profile />},
            {path: "/favorite", element: <Favorite/>},
            {path: "/pending", element: <Pending/>}
        ]
    },
])

export default router