import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ redirectPath = "signin", isAllowed }) {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />
    }

    return <Outlet/>
}

export default ProtectedRoute;