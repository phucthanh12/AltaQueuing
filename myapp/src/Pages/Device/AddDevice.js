import React from 'react';
import HeaderInfo from '../Home/HeaderInfo';
import FormAddDevice from './FormAddDevice';

const AddDevice = () => {
    return (
        <div className="deviceManager">
            <HeaderInfo
            title={"Thêm thiết bị"}
            tasks={["Thiết bị","Danh sách thiết bị"]}
            />
            <div className="deviceManager-tittle">Quản lý thiết bị</div>
            <FormAddDevice />
            
        </div>
    )
}
export default AddDevice;