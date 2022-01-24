import React from "react";
import HeaderInfo from "../Home/HeaderInfo";
import ControlDevice from "./ControlDevice";
import Table from "../../components/Table";
import { Equipments, tittleEquipments } from "../../Assets/fakeData/equipData";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
const DeviceManager = () => {
    return (
        <div className="deviceManager">
            <HeaderInfo title={"Danh sách thiết bị"} task={["Thiết bị", ""]} />
            <ControlDevice />
            <Table titleHeaders={tittleEquipments} datas={Equipments} />
            <Pagination />
            <Link to='/add'>
                <div className="deviceManager-add">
                    <div className="deviceManager-add_icon">+</div>
                    Thêm thiết bị
                </div>
            </Link>
        </div>
    );
};

export default DeviceManager;