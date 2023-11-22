import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { addRoom } from '../../../api/rooms';
import { imageUpload } from '../../../api/utils';
import AddRoomForm from '../../../components/Form/AddRoomForm';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddRoom = () => {
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })

    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState("Upload image");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const category = form?.category?.value || 'category';
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guests = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const bedrooms = form.bedrooms.value;
        const image = form.image.files[0]

        const image_url = await imageUpload(image);

        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        const roomData = {
            location, category, title, to, from, price, guests, bathrooms, bedrooms, host, description, image: image_url?.data?.display_url
        }

        try {
            const data = await addRoom(roomData);
            console.log(data);
            setUploadButtonText('Uploaded!');
            toast.success('Room Added!');
            navigate('/dashboard/my-listings');
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }

        console.table(roomData)
    }

    const handleDates = (ranges) => {
        setDates(ranges.selection);
    }

    const handleImageChange = (image) => {
        console.log(image);
        setUploadButtonText(image?.name)
    }

    return <>
        <Helmet>
            <title>Add Room | Dashboard</title>
        </Helmet>
        {/* form */}

        <AddRoomForm
            loading={loading}
            uploadButtonText={uploadButtonText}
            handleImageChange={handleImageChange}
            handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} ></AddRoomForm>
    </>
};

export default AddRoom;