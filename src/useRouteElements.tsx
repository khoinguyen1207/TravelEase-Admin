import { useRoutes } from 'react-router-dom'
import { ROUTES } from './constants/Routes'
import Login from './pages/Login'

export default function useRouteElements() {
    const element = useRoutes([
        {
            path: ROUTES.LOGIN,
            element: <Login />
        }
    ])

    return element
}
