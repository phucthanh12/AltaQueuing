import React from "react";
import HeaderInfo from "../Home/HeaderInfo";
import ControlDevice from "./ControlDevice";
import Table from "../../components/Table";
import { Equipments, tittleEquipments } from "../../Assets/fakeData/equipData";
import Pagination from "../../components/Pagination";
const DeviceManager = () => {
    return (
        <div className="deviceManager">
            <HeaderInfo title={"Danh sách thiết bị"} task={["Thiết bị", ""]} />
            <ControlDevice />
            <Table titleHeaders={tittleEquipments} datas={Equipments} />
            <Pagination />
        </div>
    );
};

export default DeviceManager;