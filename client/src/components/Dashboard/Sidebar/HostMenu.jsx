
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
import { BsGraphUp } from 'react-icons/bs'


const HostMenu = () => {
    return (
        <>
            <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
              />

              {/* Menu Items */} 
              <MenuItem
                icon={BsFillHouseAddFill}
                label='Add Room'
                address='/dashboard/add-room'
              />
              <MenuItem
                icon={MdHomeWork}
                label='My Listings'
                address='/dashboard/my-listings'
              />
        </>
    );
};

export default HostMenu;