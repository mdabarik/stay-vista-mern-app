import axiosSecure from '.';

export const getAllRooms = async () => {
    const {data} = await axiosSecure('/rooms');
    return data;
}

export const getRoom = async (id) => {
    const { data } = await axiosSecure(`/rooms/${id}`);
    return data;
}

export const getHostRooms = async(email) => {
    const {data} = await axiosSecure(`/host-rooms/${email}`)
    return data;
}

export const addRoom = async (roomData) => {
    const { data } = await axiosSecure.post(`/rooms`, roomData);
    return data;
}

