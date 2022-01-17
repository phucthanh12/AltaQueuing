import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Assets/images/logo.png";
import { navLists } from "../Assets/fakeData/dashboardData";
import Button from "./Button";

const DashBoard = () => {
    return (
        // <div className=" col l-2" >
        <div className="dashboard">
            <div className="dashboard-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="dashboard-list">
                {navLists.map((item) => (
                    <NavLink
                        to={item.path}
                        className={
                            ({ isActive }) =>
                                isActive
                                    ? "active dashboard-list_item"
                                    : "dashboard-list_item "
                            // path === item.path
                            //     ? "dashboard-list_item active"
                            //     : "dashboard-list_item "
                        }
                        // activeClassName="active"
                        key={item.display}
                    >
                        <img src={item.icon} alt="" />
                        <span className="dashboard-list_content">
                            {item.display}
                        </span>
                        {item.display === "Cài đặt hệ thống" ? (
                            <i className="bx bx-dots-vertical-rounded dashboard-list_setting"></i>
                        ) : (
                            ""
                        )}
                    </NavLink>
                ))}

                <div className="dashboard-logout">
                    <Link to="/login">
                        <Button
                            buttonSize="btn--XL"
                            type="button"
                            buttonStyle="btn--warning--solid"
                        >
                            <i className="bx bx-log-out dashboard-logout_icon"></i>
                            <span className="dashboard-logout_content">
                                Đăng xuất
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
        // </div>   
    );
};

export default DashBoard;