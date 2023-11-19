import { useParams, useSearchParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import Calender from "../../components/RoomDetails/Calender";
import RoomReservation from "../../components/RoomDetails/RoomReservation";

const RoomDetails = () => {

    const [room, setRoom] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        fetch("./../rooms.json")
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id == id);
                setRoom(singleRoom);
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <Container>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    {/* header + img */}
                    <Header room={room}></Header>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                    {/* room info */}
                    <RoomInfo room={room}></RoomInfo>
                    {/* calendar */}
                    <div className="col-span-3 order-first md:order-last mb-10">
                        <h1>Calender</h1>
                        {/* Room Reservation */}
                        <RoomReservation room={room}></RoomReservation>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;