import { useParams, useSearchParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {

    const [room, setRoom] = useState([]);
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

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
        <Loader></Loader>
    }

    return (
        <Container>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            <div>
                <div className="flex flex-col gap-6">
                    {/* header + img */}
                </div>
                <div>
                    {/* room info */}
                </div>
                <div>
                    {/* calender */}
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;