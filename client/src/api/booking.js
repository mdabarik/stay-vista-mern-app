import axiosSecure from ".";

// create payment intent
export const createPaymentIntent = async (price) => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, price);
    return data;
}

// save booking info in db
export const saveBookingInfo = async (paymentInfo) => {
    const { data } = await axiosSecure.post('/bookings', paymentInfo);
    return data;
}

// update room status after booking in db
export const udpateStatus = async (id, status) => {
    const { data } = await axiosSecure.patch(`/rooms/status/${id}`, { status });
    return data;
}

// get all booking
export const getBookings = async (email) => {
    const { data } = await axiosSecure.get(`/bookings?email=${email}`)
    return data;
}

// get all host booking
export const getHostBookings = async (email) => {
    const { data } = await axiosSecure.get(`/bookings/host?email=${email}`)
    return data;
}
