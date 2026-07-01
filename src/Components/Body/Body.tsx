import { useState, useEffect } from 'react';
import RestaurantContainer from "./RestaurantContainer/RestaurantContainer";
import Search from "./Search/Search";
import FilterButton from "./FilterButton/FilterButton";
import RestaurantSkeletonContainer from "./LoadingSkeletonContainer/RestaurantSkeletonContainer";
import FilterSkeletonButton from "./LoadingSkeletonContainer/FilterSkeletonButton";
import { restData, restaurant_Api_Url } from '../Utils/Constants';

interface BodyProps {
    searchText: string;
}

const Body = ({ searchText }: BodyProps) => {
    const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);
    const [listOfRestaurants, setListOfRestaurants] = useState<any[]>([]);
    const [restaurantsFilterHeaderText, setRestaurantsFilterHeaderText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        const filtered = listOfRestaurants.filter(rest =>
            rest.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }, [searchText, listOfRestaurants])

    const fetchData = async () => {
        const data = await fetch(restaurant_Api_Url);
        const json = await data.json();
        const listOfRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const headerText = json?.data?.cards[2]?.card?.card?.title;
        setFilteredRestaurants(listOfRestaurants || []);
        setListOfRestaurants(listOfRestaurants || []);
        setRestaurantsFilterHeaderText(headerText);
    }

    return (
        <div className="body">
            {listOfRestaurants.length === 0 ? (
                <>
                    <FilterSkeletonButton />
                    <RestaurantSkeletonContainer />
                </>
            ) : (
                <>
                    <FilterButton setListOfRestaurants={setListOfRestaurants} restaurantsFilterHeaderText={restaurantsFilterHeaderText} />
                    <RestaurantContainer listOfRestaurants={filteredRestaurants} />
                </>
            )}
        </div>
    );
};
export default Body;