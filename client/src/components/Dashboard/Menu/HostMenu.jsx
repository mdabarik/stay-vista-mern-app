
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import { BsGraphUp } from 'react-icons/bs'
import { MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from "../Sidebar/MenuItem";


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
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Bookings'
        address='manage-bookings'
      />
    </>
  );
};

export default HostMenu;