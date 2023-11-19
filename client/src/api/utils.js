import axios from "axios";
const api_key_imgbb = '3976cc9d7972778cd001ae4635f608c6';
export const imageUpload = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${api_key_imgbb}`, formData);
    return data;
}