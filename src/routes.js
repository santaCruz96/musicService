import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";

function AppRoutes({ user }) {
    return (
        <Routes>
            <Route element={<ProtectedRoute isAllowed={Boolean(user)}/>}>
                <Route path="/*" element={<MainPage />}/>
            </Route>
            <Route path="signin" element={<SignIn/> } />
            <Route path="signup" element={<SignUp/> } />
        </Routes>
    )
}

export default AppRoutes;