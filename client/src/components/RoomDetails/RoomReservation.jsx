/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Button from "../Button/Button";
import BookingModal from "../Modal/BookingModal";
import Calender from "./Calender";


const RoomReservation = ({ room }) => {
    const {user} = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    }
     // price calculation
     const totalDays = parseInt(formatDistance(new Date(room.to), new Date(room.from)).split(" ")[0]);
     const totalPrice = totalDays * room.price;
 
     const [value, setValue] = useState({
         startDate: new Date(room?.from),
         endDate: new Date(room?.to),
         key: 'selection'
     })

    const [bookingInfo, setBookingInfo] = useState({
        guest: {
            name: user?.displayName, email: user?.email, image: user?.photoURL
        },
        host: room?.host?.email,
        location: room?.location,
        price: totalPrice,
        to: value.endDate,
        from: value.endDate,
        title: room?.title,
        roomId: room?._id,
        image: room?.image
    });
 
    return (
        <div className="rounded-xl border-[1px] border-neutral-200 bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">
                    ${room?.price}
                </div>
                <div className="font-light text-neutral-600 ">
                    Night
                </div>
            </div>
            <hr />
            <div className="flex justify-center">
                <Calender value={value} ></Calender>
            </div>
            <hr />
            <div onClick={() => setIsOpen(true)} className="p-4">
                <Button disabled={room.host.email == user.email || room.booked} label={"Reserve"} ></Button>
            </div>
            <hr />
            <div className="p-4 flex items-center justify-between font-semibold text-lg">
                <div>Total</div>
                <div>${totalPrice}</div>
            </div>
            <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo} ></BookingModal>
        </div>
    );
};

export default RoomReservation;