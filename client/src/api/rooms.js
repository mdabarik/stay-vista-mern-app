import axiosSecure from '.';

export const getAllRooms = async () => {
    const {data} = await axiosSecure('/rooms');
    return data;
}

export const getRoom = async (id) => {
    const { data } = await axiosSecure(`/rooms/${id}`);
    return data;
}