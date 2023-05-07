import { createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SignInPage from './pages/SignInPage'
import ErrorPage from './pages/error/ErrorPage'

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/signin",
        type: "exact",
        element: <SignInPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/user/:userId",
        element: <ErrorPage />
    }
])