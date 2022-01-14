import React from "react";
import UserLogin from "./UserLogin";
import UserPicture from "./UserPicture";
import pic1 from "../../Assets/images/loginpic.png";

const PageLogin = () => {
    return (
        <div className="login row no-gutters">
            <UserLogin forgot />
            <UserPicture pic={pic1} tittle="quản lý xếp hàng"></UserPicture>
        </div>
    );
};

export default PageLogin;