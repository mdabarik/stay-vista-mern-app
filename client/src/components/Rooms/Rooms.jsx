import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch("./rooms.json")
            .then(res => res.json())
            .then(data => {
                setRooms(data);
            })
    }, [])

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {
                    rooms.map(room => <Card key={room._id} room={room}></Card>)
                }
            </div>
        </Container>
    );
};

export default Rooms;