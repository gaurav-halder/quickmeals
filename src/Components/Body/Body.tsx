import { useState } from 'react';
import RestaurantContainer from "./RestaurantContainer/RestaurantContainer";
import Search from "./Search/Search";
import FilterButton from "./FilterButton/FilterButton";
import { restData } from '../Utils/Constants';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restData.restaurants);
    return (
        <div className="body">
            <Search />
            <FilterButton
                setListOfRestaurants={setListOfRestaurants}
            />
            <RestaurantContainer listOfRestaurants={listOfRestaurants} />
        </div>
    );
};
export default Body;