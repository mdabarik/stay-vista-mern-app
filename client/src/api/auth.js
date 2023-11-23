import axiosSecure from ".";

export const saveUser = async (user) => {
    const currUser = {
        email: user.email,
        role: 'guest',
        status: 'Verified'
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currUser);
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

export const getUserRole = async (email) => {
    const { data } = await axiosSecure.get(`/users/${email}`);
    return data?.role;
}

export const getAllUsers = async () => {
    const { data } = await axiosSecure('/users');
    return data;
}


export const updateRole = async ({ email, role }) => {
    const currUser = {
        email, role,
        status: 'Verified'
    }
    const { data } = await axiosSecure.put(`/users/update/${email}`, currUser);
    return data;
}

export const becomeHost = async (email) => {
    const currUser = {
        email,
        status: 'Requested'
    }
    const { data } = await axiosSecure.put(`/users/${email}`, currUser);
    return data;
}
