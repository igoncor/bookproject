import { createBrowserRouter } from "react-router-dom"

import Root from "../layout/root"
import Home from "../pages/Home/Home"
import Title from "../pages/Title/Title"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {path: "/home", element: <Home />},
            {path: "/titles", element: <Title />},
            // {path: "/profile", element: <Profile />},
            // {path: "/login", element: <Login />},
        ]
    },
  
    
])

export default router