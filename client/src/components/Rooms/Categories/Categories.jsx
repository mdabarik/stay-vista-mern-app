import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {

    return (
        <Container>
            <div className="flex items-center justify-between overflow-x-auto mb-5">
                {
                    categories.map(category => <CategoryBox key={category._id} label={category?.label} icon={category?.icon} ></CategoryBox>)
                }
            </div>
        </Container>
    );
};

export default Categories;