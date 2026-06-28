import { useState, useEffect } from 'react';
import RestaurantContainer from "./RestaurantContainer/RestaurantContainer";
import Search from "./Search/Search";
import FilterButton from "./FilterButton/FilterButton";
import RestaurantSkeletonContainer from "./LoadingSkeletonContainer/RestaurantSkeletonContainer";
import FilterSkeletonButton from "./LoadingSkeletonContainer/FilterSkeletonButton";
import { restData, restaurant_Api_Url } from '../Utils/Constants';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState<any[]>([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(restaurant_Api_Url);
        const json = await data.json();
        const listOfRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(listOfRestaurants);
    }

    return (
        <div className="body">
            <Search />
            {listOfRestaurants.length === 0 ? (
                <>
                    <FilterSkeletonButton />
                    <RestaurantSkeletonContainer />
                </>
            ) : (
                <>
                    <FilterButton setListOfRestaurants={setListOfRestaurants} />
                    <RestaurantContainer listOfRestaurants={listOfRestaurants} />
                </>
            )}
        </div>
    );
};
export default Body;