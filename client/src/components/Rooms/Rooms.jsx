import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import { Helmet } from "react-helmet-async";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [params, setParams] = useSearchParams();
    const currCategory = params.get('category');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getAllRooms()
            .then(data => {
                if (currCategory) {
                    const filter = data.filter(room => room?.category === currCategory);
                    setRooms(filter);
                } else {
                    setRooms(data);
                }
                setLoading(false);
            })
    }, [currCategory])

    if (loading) {
        <Loader></Loader>
    }

    return (
        <Container>
            <Helmet>
                <title>Home - Stay Vista</title>
            </Helmet>
            {
                rooms && rooms.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {
                        rooms.map(room => <Card key={room._id} room={room}></Card>)
                    }
                </div> :
                    <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                        <Heading title={"No rooms available in this category"} subtitle={"Please select other category"} center={true}></Heading>
                    </div>
            }
        </Container>
    );
};

export default Rooms;