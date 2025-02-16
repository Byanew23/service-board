import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import { LandingPage, Profile, Service } from "../pages";

export const Routes = () => {
    const { token } = useAuth()

    const routesForPublic = [
        {
            path: "/service",
            element: <Service />,
        },
    ];

    const routesForAuthenticatedOnly = [
        {
            path: "/profile",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/profile",
                    element: <Profile />,
                },
            ],
        },
    ];

    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/login",
            element: <div>Login form</div>,
        },
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    return <RouterProvider router={router} />
}