import React from "react";
import HeaderInfo from "./HeaderInfo";
import CardInfo from "./CardInfo";
import { users } from "../../Assets/fakeData/userData";
import userAvatar from "../../Assets/images/userAvatar.png"
const Info = () => {
    return (
        // <div className="col l-10">
        <div className="infoUser ">

            {/* <HeaderInfo title="Thông tin cá nhân" />        */}
            <CardInfo user={users[0]} />

            
        </div>
        // </div>
    );
};

export default Info;