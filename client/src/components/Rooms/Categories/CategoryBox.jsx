import { useNavigate, useSearchParams} from 'react-router-dom';
import qs from 'query-string';

const CategoryBox = ({label, icon:Icon, selected }) => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const currCategory = params.get('category');

    const handleClick = () => {
        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString());
            const updatedQuery = {...currentQuery, category: label};
            const url = qs.stringifyUrl({
                url: '/',
                query: updatedQuery
            })
            navigate(url);
        }
    }

    console.log(params);
    return (
        <div onClick={() => handleClick(label)} className={
            `flex flex-col items-center justify-center gap-2 p-3  cursor-pointer ${label == currCategory ? 'border-b-2 border-b-orange-950' : ''}`
        }>
            <Icon></Icon>
            {label}
        </div>
    );
};

export default CategoryBox;