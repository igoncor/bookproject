import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/root"
import Home from "../pages/Home/Home"
import SignUpPage from "../pages/SignUp/SignUp"
import SignInPage from "../pages/SignIn/SignIn"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {path: "/home", element: <Home />},
            // {path: "/profile", element: <Profile />},
            {path: "/sign-up", element: <SignUpPage />},
            {path: "/sign-in", element: <SignInPage />},
        ]
    },
])

export default router