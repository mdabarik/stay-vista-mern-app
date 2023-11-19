import axiosSecure from ".";

export const saveUser = async (user) => {
    const currUser = {
        email: user.email,
        role: 'guest',
        status: 'Verified'
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currUser);
    return data;
}

export const getToken = async (email) => {
    const { data } = await axiosSecure.post('/jwt', email);
    console.log('token received from server ...');
    return data;
}

export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout');
    console.log('logged out ...');
    return data;
}