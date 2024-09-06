
import { ROUTERS } from "./utils/router";
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/users/homePage";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME, // lấy đường dẫn từ ROUTERS trong utils
            Component: <HomePage/>
        }, // tạo ra đường dẫn đến trang từ router trong utils
        {
            path: ROUTERS.USER.PROFILE, // lấy đường dẫn từ ROUTERS trong utils
            Component: <ProfilePage/>
        }, // tạo ra đường dẫn đến trang từ router trong utils
    ];

    // Xử lí đường dẫn page
    return (
        <MasterLayout>
        <Routes>
            {
                userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element = {item.Component} /> 
                ))}
        </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return  renderUserRouter();
}

export default RouterCustom;