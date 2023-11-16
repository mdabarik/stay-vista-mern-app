/* eslint-disable no-unused-vars */

const CategoryBox = ({label, icon:Icon }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 cursor-pointer">
            <Icon></Icon>
            {label}
        </div>
    );
};

export default CategoryBox;