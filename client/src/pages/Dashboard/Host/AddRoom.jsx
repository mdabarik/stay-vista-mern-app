import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AddRoomForm from '../../../components/Form/AddRoomForm';

const AddRoom = () => {

    const handleSubmit = (e) => {
        const [dates, setDates] = useState({
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        })
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guest = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const bedrooms = form.bedrooms.value;
        const iamge = form.image.files[0]
    }

    const handleDates = (ranges) => {
        setDates(ranges.selection);
    }

    return <>
        <Helmet>
            <title>Add Room | Dashboard</title>
        </Helmet>
        {/* form */}
        <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} ></AddRoomForm>
    </>
};

export default AddRoom;