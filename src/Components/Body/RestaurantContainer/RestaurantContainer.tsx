import RestaurantCard from "./RestaurantCard/RestaurantCard";
import { restData, resCardImageUrl } from "../../Utils/Constants";

interface RestaurantContainerProps {
    listOfRestaurants: any[];
}

const RestaurantContainer = ({ listOfRestaurants }: RestaurantContainerProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-10">
            {listOfRestaurants.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.info.id}
                    resName={restaurant.info.name}
                    cuisine={restaurant.info.cuisines.join(", ")}
                    rating={restaurant.info.avgRating}
                    time={restaurant.info.sla.deliveryTime}
                    labelHeader={restaurant.info.aggregatedDiscountInfoV3?.header}
                    labelSubHeader={restaurant.info.aggregatedDiscountInfoV3?.subHeader}
                    discountTagHeader={restaurant.info.aggregatedDiscountInfoV3?.discountTag}
                    image={resCardImageUrl + restaurant.info.cloudinaryImageId}
                />
            ))}
        </div>

    )
};
export default RestaurantContainer;